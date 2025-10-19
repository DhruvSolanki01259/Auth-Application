import { generateCookieAndToken } from "../utils/generateCookieAndToken.js";
import {
  verifyEmailTemplate,
  welcomeEmailTemplate,
} from "../utils/emailTemplates.js";
import { verificationCodeEmail } from "../utils/emails.js";

import User from "../models/user.model.js";

import bcrypt from "bcryptjs";
import { welcomeEmail } from "../utils/emails.js";

export const signupController = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "All Fields are Required",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, error: true, message: "User Already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const user = new User({
      username,
      email,
      password: hashedPassword,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
    });

    await user.save();
    generateCookieAndToken(res, user._id);

    const verifyEmailSubject = "Verify Your Email";
    const emailTemplate = verifyEmailTemplate(user.username, verificationToken);
    await verificationCodeEmail(user.email, verifyEmailSubject, emailTemplate);

    return res.status(201).json({
      success: true,
      error: false,
      message: "User Created Successfully",
      user: { ...user._doc, password: undefined },
    });
  } catch (error) {
    console.log("Error in SignUp Controller: ", error.message);
    return res.status(500).json({
      success: false,
      error: true,
      message: "Error Signing Up the User",
    });
  }
};

export const verifyEmailController = async (req, res) => {
  const { code } = req.body;

  try {
    if (!code) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Enter the Code Properly",
      });
    }

    const user = await User.findOne({
      verificationToken: code,
      verificationTokenExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Invalid or Expired Verification Code",
      });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;
    await user.save();

    const emailSubject = "Welcome Email";
    const emailTemplate = welcomeEmailTemplate(user.username);
    await welcomeEmail(user.email, emailSubject, emailTemplate);

    return res.status(200).json({
      success: true,
      error: false,
      message: "Verified Email Successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.log("Error in Verify Email Controller: ", error.message);
    return res.status(500).json({
      success: false,
      error: true,
      message: "Error in Verifying the Email",
    });
  }
};

export const loginController = async (req, res) => {};

export const logoutController = () => {};

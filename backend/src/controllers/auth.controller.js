import {
  forgetPasswordEmail,
  resetPasswordSuccessEmail,
  welcomeEmail,
} from "../utils/emails.js";
import { verificationCodeEmail } from "../utils/emails.js";
import { generateCookieAndToken } from "../utils/generateCookieAndToken.js";
import {
  resetPasswordEmailTemplate,
  resetSuccessEmailTemplate,
  verifyEmailTemplate,
  welcomeEmailTemplate,
} from "../utils/emailTemplates.js";

import User from "../models/user.model.js";

import bcrypt from "bcryptjs";
import crypto from "crypto";

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

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "All fields are Required",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, error: true, message: "User Not Found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ success: false, error: true, message: "Invalid Credentials" });
    }

    user.lastLogin = Date.now();
    await user.save();

    return res.status(200).json({
      success: true,
      error: false,
      message: "User Logged In Successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.log("Error in Login Controller: ", error.message);
    res.status(500).json({
      success: false,
      error: true,
      message: "Error in Logging In the User",
    });
    return;
  }
};

export const logoutController = (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      success: true,
      error: false,
      message: "User Logged Out Successfully",
    });
    return;
  } catch (error) {
    console.log("Error in Logout Controller: ", error.message);
    return res
      .status(500)
      .json({ success: false, error: true, message: "Error in Log Out" });
  }
};

export const forgetPasswordController = async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "All fields are Required",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, error: true, message: "User Not Found" });
    }

    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetTokenExpiredAt = Date.now() + 1 * 60 * 60 * 1000;

    user.resetPasswordToken = resetToken;
    user.resetPasswordTokenExpiresAt = resetTokenExpiredAt;
    await user.save();

    const forgetPasswordLink = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;
    const emailSubject = "Forget Password";
    const emailTemplate = resetPasswordEmailTemplate(
      user.username,
      forgetPasswordLink
    );
    await forgetPasswordEmail(user.email, emailSubject, emailTemplate);

    return res.status(200).json({
      success: true,
      error: false,
      message: "Forget Password link was Sent to your Email",
    });
  } catch (error) {
    console.log("Error in Forget Password Controller: ", error.message);
    return res
      .status(500)
      .json({ success: false, error: true, message: "Forget Password Error" });
  }
};

export const resetPasswordController = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  try {
    if (!password) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "All fields are Required",
      });
    }

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordTokenExpiresAt: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Invalid or Expired Token",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordTokenExpiresAt = undefined;
    await user.save();

    const emailTemplate = resetSuccessEmailTemplate(user.username);
    const emailSubject = "Password Reset Successfully";
    await resetPasswordSuccessEmail(user.email, emailSubject, emailTemplate);

    return res.status(200).json({
      success: true,
      error: false,
      message: "Password Reset Successfully",
    });
  } catch (error) {
    console.log("Error in Reset Password Controller: ", error.message);
    return res
      .status(500)
      .json({ success: false, error: true, message: "Reset Password Error" });
  }
};

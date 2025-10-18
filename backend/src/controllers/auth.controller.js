import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { generateCookieAndToken } from "../utils/generateCookieAndToken.js";

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

export const loginController = async (req, res) => {};

export const logoutController = () => {};

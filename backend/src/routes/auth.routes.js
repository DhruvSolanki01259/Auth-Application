import express from "express";
import {
  signupController,
  loginController,
  logoutController,
  verifyEmailController,
  forgetPasswordController,
  resetPasswordController,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/logout", logoutController);

router.post("/verify-email", verifyEmailController);
router.post("/forget-password", forgetPasswordController);

router.post("/reset-password/:token", resetPasswordController);

export default router;

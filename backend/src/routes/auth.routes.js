import express from "express";
import {
  signupController,
  loginController,
  logoutController,
  verifyEmailController,
  forgetPasswordController,
  resetPasswordController,
  checkAuth,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoutes.js";

const router = express.Router();

router.get("/check-auth", protectRoute, checkAuth);

router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/logout", logoutController);

router.post("/verify-email", verifyEmailController);
router.post("/forget-password", forgetPasswordController);

router.post("/reset-password/:token", resetPasswordController);

export default router;

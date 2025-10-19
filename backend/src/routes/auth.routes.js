import express from "express";
import {
  signupController,
  loginController,
  logoutController,
  verifyEmailController,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/logout", logoutController);

router.post("/verify-email", verifyEmailController);

export default router;

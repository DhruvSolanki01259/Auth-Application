// 🌌 LIGHT THEME CONSTANTS
const CLIENT_URL = process.env.CLIENT_URL;
const BRAND_NAME = "Auth Application";
const BRAND_GRADIENT = "linear-gradient(90deg, #d946ef, #9333ea, #06b6d4)";
const BG_COLOR = "#f9f9f9";
const CARD_BG = "#ffffff";
const BORDER_COLOR = "#e5e7eb";
const TEXT_LIGHT = "#111827";
const TEXT_MUTED = "#6b7280";

// ✉️ EMAIL VERIFICATION TEMPLATE
export const verifyEmailTemplate = (username, verificationCode) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Email Verification</title>
</head>
<body style="font-family: 'Inter', sans-serif; background: ${BG_COLOR}; color: ${TEXT_LIGHT}; margin: 0; padding: 40px 0;">
  <div style="max-width: 640px; margin: auto; background: ${CARD_BG}; border: 1px solid ${BORDER_COLOR}; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
    
    <div style="text-align: center; padding: 28px 0;">
      <h1 style="margin: 0; font-size: 26px; background: ${BRAND_GRADIENT}; -webkit-background-clip: text; color: transparent;">Verify Your Email</h1>
    </div>

    <div style="padding: 40px;">
      <h2 style="background: ${BRAND_GRADIENT}; -webkit-background-clip: text; color: transparent;">Hey ${username} 👋</h2>
      <p>Welcome to <strong style="background: ${BRAND_GRADIENT}; -webkit-background-clip: text; color: transparent;">${BRAND_NAME}</strong>! Use the verification code below to activate your account:</p>
      
      <div style="text-align: center; margin: 36px 0;">
        <span style="display: inline-block; background: #f3f4f6; color: ${TEXT_LIGHT}; padding: 18px 36px; border-radius: 10px; font-size: 28px; font-weight: 600; letter-spacing: 4px; box-shadow: 0 0 15px rgba(0,0,0,0.05);">
          ${verificationCode}
        </span>
      </div>

      <p>This code will expire in <strong>24 hours</strong>. Enter it on the verification page to complete your signup.</p>
      <p style="color: ${TEXT_MUTED}; font-size: 13px;">If you didn’t request this, you can safely ignore this email.</p>
    </div>

    <div style="text-align: center; background: #f3f4f6; padding: 14px; font-size: 12px; color: ${TEXT_MUTED};">
      © ${new Date().getFullYear()} ${BRAND_NAME}. All rights reserved.
    </div>

  </div>
</body>
</html>
`;

// 🎉 WELCOME TEMPLATE
export const welcomeEmailTemplate = (username) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Welcome to ${BRAND_NAME}</title>
</head>
<body style="font-family: 'Inter', sans-serif; background: ${BG_COLOR}; color: ${TEXT_LIGHT}; margin: 0; padding: 40px 0;">
  <div style="max-width: 640px; margin: auto; background: ${CARD_BG}; border: 1px solid ${BORDER_COLOR}; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
    
    <div style="text-align: center; padding: 28px 0;">
      <h1 style="margin: 0; font-size: 26px; background: ${BRAND_GRADIENT}; -webkit-background-clip: text; color: transparent;">Welcome Aboard 🎉</h1>
    </div>

    <div style="padding: 40px;">
      <h2 style="background: ${BRAND_GRADIENT}; -webkit-background-clip: text; color: transparent;">Welcome, ${username}!</h2>
      <p>We’re thrilled to have you join <strong style="background: ${BRAND_GRADIENT}; -webkit-background-clip: text; color: transparent;">${BRAND_NAME}</strong>. Here’s how to get started:</p>
      <ul style="color: ${TEXT_MUTED}; line-height: 1.8; padding-left: 20px;">
        <li>✅ Access your personalized dashboard</li>
        <li>🔐 Update your profile for extra security</li>
        <li>🚀 Enjoy smooth authentication experiences</li>
      </ul>

      <div style="text-align: center; margin: 36px 0;">
        <a href="${CLIENT_URL}/dashboard" style="background: ${BRAND_GRADIENT}; color: #fff; text-decoration: none; padding: 14px 32px; border-radius: 10px; font-weight: 600; box-shadow: 0 0 25px rgba(217,70,239,0.3);">
          Go to Dashboard
        </a>
      </div>

      <p>If you ever need assistance, visit our <a href="${CLIENT_URL}/support" style="color:${TEXT_LIGHT}; text-decoration:none;">Support Center</a>.</p>
    </div>

    <div style="text-align: center; background: #f3f4f6; padding: 14px; font-size: 12px; color: ${TEXT_MUTED};">
      © ${new Date().getFullYear()} ${BRAND_NAME}. All rights reserved.
    </div>
  </div>
</body>
</html>
`;

// 🔑 RESET PASSWORD TEMPLATE
export const resetPasswordEmailTemplate = (username, resetLink) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Reset Your Password</title>
</head>
<body style="font-family: 'Inter', sans-serif; background: ${BG_COLOR}; color: ${TEXT_LIGHT}; margin: 0; padding: 40px 0;">
  <div style="max-width: 640px; margin: auto; background: ${CARD_BG}; border: 1px solid ${BORDER_COLOR}; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
    
    <div style="text-align: center; padding: 28px 0;">
      <h1 style="margin: 0; font-size: 26px; background: ${BRAND_GRADIENT}; -webkit-background-clip: text; color: transparent;">Reset Your Password</h1>
    </div>

    <div style="padding: 40px;">
      <h2 style="background: ${BRAND_GRADIENT}; -webkit-background-clip: text; color: transparent;">Hey ${username},</h2>
      <p>We received a request to reset your password for <strong style="background: ${BRAND_GRADIENT}; -webkit-background-clip: text; color: transparent;">${BRAND_NAME}</strong>.</p>
      <p>Click below to securely reset your password:</p>

      <div style="text-align: center; margin: 36px 0;">
        <a href="${resetLink}" style="background: ${BRAND_GRADIENT}; color: #fff; text-decoration: none; padding: 14px 32px; border-radius: 10px; font-weight: 600; box-shadow: 0 0 25px rgba(147,51,234,0.3);">
          Reset Password
        </a>
      </div>

      <p>This link will expire in <strong>1 hour</strong>. If you didn’t request this, please ignore this email.</p>
    </div>

    <div style="text-align: center; background: #f3f4f6; padding: 14px; font-size: 12px; color: ${TEXT_MUTED};">
      Need help? Contact <a href="mailto:support@auth-application.com" style="color:${TEXT_LIGHT};">support</a>.
    </div>
  </div>
</body>
</html>
`;

// ✅ RESET SUCCESS TEMPLATE
export const resetSuccessEmailTemplate = (username) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Password Reset Successful</title>
</head>
<body style="font-family: 'Inter', sans-serif; background: ${BG_COLOR}; color: ${TEXT_LIGHT}; margin: 0; padding: 40px 0;">
  <div style="max-width: 640px; margin: auto; background: ${CARD_BG}; border: 1px solid ${BORDER_COLOR}; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
    
    <div style="text-align: center; padding: 28px 0;">
      <h1 style="margin: 0; font-size: 26px; background: ${BRAND_GRADIENT}; -webkit-background-clip: text; color: transparent;">Password Reset Successful</h1>
    </div>

    <div style="padding: 40px;">
      <h2 style="background: ${BRAND_GRADIENT}; -webkit-background-clip: text; color: transparent;">Hey ${username},</h2>
      <p>Your password for <strong style="background: ${BRAND_GRADIENT}; -webkit-background-clip: text; color: transparent;">${BRAND_NAME}</strong> has been updated successfully ✅</p>
      <p>If this wasn’t you, please contact our <a href="mailto:support@auth-application.com" style="color:${TEXT_LIGHT};">support team</a> immediately.</p>
    </div>

    <div style="text-align: center; background: #f3f4f6; padding: 14px; font-size: 12px; color: ${TEXT_MUTED};">
      © ${new Date().getFullYear()} ${BRAND_NAME}. Stay safe ⚡
    </div>
  </div>
</body>
</html>
`;

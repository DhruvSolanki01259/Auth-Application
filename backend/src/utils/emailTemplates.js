export const verifyEmailTemplate = (username, verificationCode) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Email Verification</title>
</head>
<body style="font-family: 'Inter', Arial, sans-serif; background-color: #0b0b0f; margin: 0; padding: 0; color: #fff;">
  <div style="max-width: 600px; margin: 40px auto; background: rgba(25, 25, 35, 0.9); border-radius: 14px; box-shadow: 0 0 25px rgba(255,0,255,0.2); overflow: hidden; border: 1px solid rgba(255,0,255,0.2);">
    <div style="background: linear-gradient(to right, #d946ef, #9333ea, #06b6d4); padding: 24px 0; text-align: center;">
      <h1 style="color: white; margin: 0;">Verify Your Email</h1>
    </div>
    <div style="padding: 32px;">
      <h2 style="color: #d946ef;">Hey ${username} 👋</h2>
      <p>Welcome to <strong style="color:#06b6d4;">Auth Application</strong>! Use the code below to verify your account:</p>
      <div style="text-align: center; margin: 30px 0;">
        <span style="display: inline-block; background: rgba(147,51,234,0.15); color: #06b6d4; padding: 16px 36px; border-radius: 8px; font-size: 28px; font-weight: bold; letter-spacing: 3px;">
          ${verificationCode}
        </span>
      </div>
      <p>This code will expire in <strong>24 hours</strong>. Enter it on the verification page to complete your registration.</p>
      <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 30px 0;" />
      <p style="font-size: 14px; color: #aaa;">If you didn’t request this, you can safely ignore this email.</p>
    </div>
    <div style="text-align: center; background: rgba(255,255,255,0.05); padding: 15px; color: #777; font-size: 12px;">
      <p>This is an automated message, please do not reply.</p>
    </div>
  </div>
</body>
</html>
`;

export const welcomeEmailTemplate = (username) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome Email</title>
</head>
<body style="font-family: 'Inter', Arial, sans-serif; background-color: #0b0b0f; margin: 0; padding: 0; color: #fff;">
  <div style="max-width: 600px; margin: 40px auto; background: rgba(25,25,35,0.9); border-radius: 14px; box-shadow: 0 0 25px rgba(255,0,255,0.2); overflow: hidden; border: 1px solid rgba(255,0,255,0.2);">
    <div style="background: linear-gradient(to right, #d946ef, #9333ea, #06b6d4); padding: 24px 0; text-align: center;">
      <h1 style="color: white; margin: 0;">Welcome Aboard 🎉</h1>
    </div>
    <div style="padding: 32px;">
      <h2 style="color: #d946ef;">Welcome, ${username}!</h2>
      <p>We’re thrilled to have you join <strong style="color:#06b6d4;">Auth Application</strong> — your journey to secure and seamless authentication starts now.</p>
      <ul style="line-height: 1.8; padding-left: 20px; color: #ccc;">
        <li>✅ Explore your new account dashboard</li>
        <li>🔐 Keep your profile updated for better security</li>
        <li>🚀 Enjoy fast, reliable authentication on all your devices</li>
      </ul>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${process.env.CLIENT_URL}/login" style="background: linear-gradient(to right, #d946ef, #9333ea, #06b6d4); color: white; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: bold; display: inline-block; box-shadow: 0 0 20px rgba(255,0,255,0.3);">
          Go to Dashboard
        </a>
      </div>
      <p>If you ever need help, visit our <a href="${process.env.CLIENT_URL}/support" style="color:#06b6d4; text-decoration:none;">Support Center</a>.</p>
      <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 30px 0;" />
      <p style="font-size: 14px; color: #aaa;">Welcome again, ${username}!<br>The Auth Application Team ⚡</p>
    </div>
    <div style="text-align: center; background: rgba(255,255,255,0.05); padding: 15px; color: #777; font-size: 12px;">
      <p>This is an automated message, please do not reply.</p>
    </div>
  </div>
</body>
</html>
`;

export const resetPasswordEmailTemplate = (username, resetLink) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Reset Your Password</title>
</head>
<body style="font-family: 'Inter', Arial, sans-serif; background-color: #0b0b0f; margin: 0; padding: 0; color: #fff;">
  <div style="max-width: 600px; margin: 40px auto; background: rgba(25,25,35,0.9); border-radius: 14px; box-shadow: 0 0 25px rgba(255,0,255,0.2); overflow: hidden; border: 1px solid rgba(255,0,255,0.2);">
    <div style="background: linear-gradient(to right, #d946ef, #9333ea, #06b6d4); padding: 24px 0; text-align: center;">
      <h1 style="color: white; margin: 0;">Reset Your Password</h1>
    </div>
    <div style="padding: 32px;">
      <h2 style="color: #d946ef;">Hey ${username},</h2>
      <p>We received a request to reset your password for your <strong style="color:#06b6d4;">Auth Application</strong> account.</p>
      <p>Click the button below to reset your password:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${resetLink}" style="background: linear-gradient(to right, #d946ef, #9333ea, #06b6d4); color: white; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: bold; display: inline-block; box-shadow: 0 0 20px rgba(255,0,255,0.3);">
          Reset Password
        </a>
      </div>
      <p>This link will expire in <strong>1 hour</strong>. If you didn’t request this, you can safely ignore this email.</p>
      <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 30px 0;" />
      <p style="font-size: 14px; color: #aaa;">Stay safe,<br>The Auth Application Team ⚡</p>
    </div>
    <div style="text-align: center; background: rgba(255,255,255,0.05); padding: 15px; color: #777; font-size: 12px;">
      <p>This is an automated message, please do not reply.</p>
    </div>
  </div>
</body>
</html>
`;

export const resetSuccessEmailTemplate = (username) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Password Reset Successful</title>
</head>
<body style="font-family: 'Inter', Arial, sans-serif; background-color: #0b0b0f; margin: 0; padding: 0; color: #fff;">
  <div style="max-width: 600px; margin: 40px auto; background: rgba(25,25,35,0.9); border-radius: 14px; box-shadow: 0 0 25px rgba(255,0,255,0.2); overflow: hidden; border: 1px solid rgba(255,0,255,0.2);">
    <div style="background: linear-gradient(to right, #d946ef, #9333ea, #06b6d4); padding: 24px 0; text-align: center;">
      <h1 style="color: white; margin: 0;">Password Reset Successful</h1>
    </div>
    <div style="padding: 32px;">
      <h2 style="color: #d946ef;">Hey ${username},</h2>
      <p>Your password for <strong style="color:#06b6d4;">Auth Application</strong> has been successfully reset ✅</p>
      <p>If you didn’t perform this action, please <a href="mailto:support@auth-application.com" style="color:#06b6d4;">contact our support team</a> immediately.</p>
      <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 30px 0;" />
      <p style="font-size: 14px; color: #aaa;">Thanks for keeping your account secure,<br>The Auth Application Team ⚡</p>
    </div>
    <div style="text-align: center; background: rgba(255,255,255,0.05); padding: 15px; color: #777; font-size: 12px;">
      <p>This is an automated message, please do not reply.</p>
    </div>
  </div>
</body>
</html>
`;

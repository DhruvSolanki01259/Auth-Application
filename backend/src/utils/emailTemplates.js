export const verifyEmailTemplate = (username, verificationCode) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Email Verification</title>
</head>
<body style="font-family: 'Arial', sans-serif; background-color: #f4f8ff; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 40px auto; background: white; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); overflow: hidden;">
    <div style="background: linear-gradient(to right, #1a73e8, #3b82f6); padding: 20px 0; text-align: center;">
      <h1 style="color: white; margin: 0;">Verify Your Email</h1>
    </div>
    <div style="padding: 30px;">
      <h2 style="color: #1a73e8;">Hey ${username} 👋</h2>
      <p>Welcome to <strong>Auth Application</strong>! Please use the code below to verify your account:</p>
      <div style="text-align: center; margin: 30px 0;">
        <span style="display: inline-block; background: #e8f0fe; color: #1a73e8; padding: 15px 30px; border-radius: 8px; font-size: 28px; font-weight: bold; letter-spacing: 3px;">
          ${verificationCode}
        </span>
      </div>
      <p>This code will expire in <strong>24 hours</strong>. Enter it on the verification page to complete your registration.</p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
      <p style="font-size: 14px; color: #666;">If you didn’t request this, you can safely ignore this email.</p>
    </div>
    <div style="text-align: center; background: #f1f5ff; padding: 15px; color: #999; font-size: 12px;">
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
<body style="font-family: 'Arial', sans-serif; background-color: #f4f8ff; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 40px auto; background: white; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); overflow: hidden;">
    <div style="background: linear-gradient(to right, #1a73e8, #3b82f6); padding: 20px 0; text-align: center;">
      <h1 style="color: white; margin: 0;">Welcome Aboard 🎉</h1>
    </div>
    <div style="padding: 30px;">
      <h2 style="color: #1a73e8;">Welcome, ${username}!</h2>
      <p>We’re thrilled to have you join <strong>Auth Application</strong> — your journey to secure and seamless authentication starts now.</p>
      <ul style="line-height: 1.8; padding-left: 20px;">
        <li>✅ Explore your new account dashboard</li>
        <li>🔐 Keep your profile updated for better security</li>
        <li>🚀 Enjoy fast, reliable authentication on all your devices</li>
      </ul>
      <div style="text-align: center; margin: 30px 0;">
        <a href="https://auth-application.com/login" style="background: linear-gradient(to right, #1a73e8, #3b82f6); color: white; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold; display: inline-block;">
          Go to Dashboard
        </a>
      </div>
      <p>If you ever need help, just hit reply or visit our <a href="https://auth-application.com/support" style="color:#1a73e8; text-decoration:none;">Support Center</a>.</p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
      <p style="font-size: 14px; color: #777;">Welcome again, ${username}!<br>The Auth Application Team 🚀</p>
    </div>
    <div style="text-align: center; background: #f1f5ff; padding: 15px; color: #999; font-size: 12px;">
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
<body style="font-family: 'Arial', sans-serif; background-color: #f4f8ff; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 40px auto; background: white; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); overflow: hidden;">
    <div style="background: linear-gradient(to right, #1a73e8, #3b82f6); padding: 20px 0; text-align: center;">
      <h1 style="color: white; margin: 0;">Reset Your Password</h1>
    </div>
    <div style="padding: 30px;">
      <h2 style="color: #1a73e8;">Hi ${username},</h2>
      <p>We received a request to reset your password for your <strong>Auth Application</strong> account.</p>
      <p>Click the button below to reset your password:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${resetLink}" style="background: linear-gradient(to right, #1a73e8, #3b82f6); color: white; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold; display: inline-block;">
          Reset Password
        </a>
      </div>
      <p>This link will expire in <strong>1 hour</strong>. If you didn’t request this, you can safely ignore this email.</p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
      <p style="font-size: 14px; color: #777;">Stay safe,<br>The Auth Application Team 🚀</p>
    </div>
    <div style="text-align: center; background: #f1f5ff; padding: 15px; color: #999; font-size: 12px;">
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
<body style="font-family: 'Arial', sans-serif; background-color: #f4f8ff; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 40px auto; background: white; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); overflow: hidden;">
    <div style="background: linear-gradient(to right, #1a73e8, #3b82f6); padding: 20px 0; text-align: center;">
      <h1 style="color: white; margin: 0;">Password Reset Successful</h1>
    </div>
    <div style="padding: 30px;">
      <h2 style="color: #1a73e8;">Hey ${username},</h2>
      <p>Your password for <strong>Auth Application</strong> has been successfully reset ✅</p>
      <p>If you didn’t perform this action, please <a href="mailto:support@auth-application.com" style="color:#1a73e8;">contact our support team</a> immediately.</p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
      <p style="font-size: 14px; color: #777;">Thanks for keeping your account secure,<br>The Auth Application Team ⚡</p>
    </div>
    <div style="text-align: center; background: #f1f5ff; padding: 15px; color: #999; font-size: 12px;">
      <p>This is an automated message, please do not reply.</p>
    </div>
  </div>
</body>
</html>
`;

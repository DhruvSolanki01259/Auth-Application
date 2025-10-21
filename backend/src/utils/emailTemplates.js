// Client URL
const CLIENT_URL = process.env.CLIENT_URL;

// EMAIL VERIFICATION TEMPLATE
export const verifyEmailTemplate = (username, verificationCode) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Email Verification</title>
</head>
<body style="font-family: 'Inter', sans-serif; background: #f9f9f9; color: #111827; margin: 0; padding: 40px 0;">
  <div style="max-width: 640px; margin: auto; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 30px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
    
    <div style="text-align: center; padding: 28px 0;">
      <h1 style="margin: 0; font-size: 26px;">
        <span style="background: linear-gradient(90deg, #d946ef, #9333ea, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          Verify Your Email
        </span>
      </h1>
    </div>

    <div style="padding: 40px;">
      <h2>
        Hey <span style="background: linear-gradient(90deg, #d946ef, #9333ea, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${username}</span> 👋
      </h2>
      <p>Welcome to <strong style="background: linear-gradient(90deg, #d946ef, #9333ea, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Auth Application</strong>! Use the verification code below to activate your account:</p>
      
      <div style="text-align: center; margin: 36px 0;">
        <span style="display: inline-block; background: #f3f4f6; color: #111827; padding: 18px 36px; border-radius: 10px; font-size: 28px; font-weight: 600; letter-spacing: 4px; box-shadow: 0 0 15px rgba(0,0,0,0.05);">
          ${verificationCode}
        </span>
      </div>

      <p>This code will expire in <strong>24 hours</strong>. Enter it on the verification page to complete your signup.</p>
      <p style="color: #6b7280; font-size: 13px;">If you didn’t request this, you can safely ignore this email.</p>
    </div>

    <div style="text-align: center; background: #f3f4f6; padding: 14px; font-size: 12px; color: #6b7280; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px;">
      © ${new Date().getFullYear()} Auth Application. All rights reserved.
    </div>

  </div>
</body>
</html>
`;

// WELCOME TEMPLATE
export const welcomeEmailTemplate = (username) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Welcome to Auth Application</title>
</head>
<body style="font-family: 'Inter', sans-serif; background: #f9f9f9; color: #111827; margin: 0; padding: 40px 0;">
  <div style="max-width: 640px; margin: auto; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 30px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
    
    <div style="text-align: center; padding: 28px 0;">
      <h1 style="margin: 0; font-size: 26px;">
        <span style="background: linear-gradient(90deg, #d946ef, #9333ea, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          Welcome Aboard 🎉
        </span>
      </h1>
    </div>

    <div style="padding: 40px;">
      <h2>
        Welcome, <span style="background: linear-gradient(90deg, #d946ef, #9333ea, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${username}</span>!
      </h2>
      <p>We’re thrilled to have you join <strong style="background: linear-gradient(90deg, #d946ef, #9333ea, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Auth Application</strong>. Here’s how to get started:</p>
      <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
        <li>✅ Access your personalized dashboard</li>
        <li>🔐 Update your profile for extra security</li>
        <li>🚀 Enjoy smooth authentication experiences</li>
      </ul>

      <div style="text-align: center; margin: 36px 0;">
        <a href="${CLIENT_URL}/dashboard" style="background: linear-gradient(90deg, #d946ef, #9333ea, #06b6d4); color: #fff; text-decoration: none; padding: 14px 32px; border-radius: 10px; font-weight: 600; box-shadow: 0 0 25px rgba(217,70,239,0.3);">
          Go to Dashboard
        </a>
      </div>

      <p>If you ever need assistance, visit our <a href="${CLIENT_URL}/support" style="color:#111827; text-decoration:none;">Support Center</a>.</p>
    </div>

    <div style="text-align: center; background: #f3f4f6; padding: 14px; font-size: 12px; color: #6b7280; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px;">
      © ${new Date().getFullYear()} Auth Application. All rights reserved.
    </div>
  </div>
</body>
</html>
`;

// RESET PASSWORD TEMPLATE
export const resetPasswordEmailTemplate = (username, resetLink) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Reset Your Password</title>
</head>
<body style="font-family: 'Inter', sans-serif; background: #f9f9f9; color: #111827; margin: 0; padding: 40px 0;">
  <div style="max-width: 640px; margin: auto; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 30px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
    
    <div style="text-align: center; padding: 28px 0;">
      <h1 style="margin: 0; font-size: 26px;">
        <span style="background: linear-gradient(90deg, #d946ef, #9333ea, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          Reset Your Password
        </span>
      </h1>
    </div>

    <div style="padding: 40px;">
      <h2>
        Hey <span style="background: linear-gradient(90deg, #d946ef, #9333ea, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${username}</span>,
      </h2>
      <p>We received a request to reset your password for <strong style="background: linear-gradient(90deg, #d946ef, #9333ea, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Auth Application</strong>.</p>
      <p>Click below to securely reset your password:</p>

      <div style="text-align: center; margin: 36px 0;">
        <a href="${resetLink}" style="background: linear-gradient(90deg, #d946ef, #9333ea, #06b6d4); color: #fff; text-decoration: none; padding: 14px 32px; border-radius: 10px; font-weight: 600; box-shadow: 0 0 25px rgba(147,51,234,0.3);">
          Reset Password
        </a>
      </div>

      <p>This link will expire in <strong>1 hour</strong>. If you didn’t request this, please ignore this email.</p>
    </div>

    <div style="text-align: center; background: #f3f4f6; padding: 14px; font-size: 12px; color: #6b7280; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px;">
      Need help? Contact <a href="mailto:support@auth-application.com" style="color:#111827;">support</a>.
    </div>
  </div>
</body>
</html>
`;

// RESET SUCCESS TEMPLATE
export const resetSuccessEmailTemplate = (username) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Password Reset Successful</title>
</head>
<body style="font-family: 'Inter', sans-serif; background: #f9f9f9; color: #111827; margin: 0; padding: 40px 0;">
  <div style="max-width: 640px; margin: auto; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 30px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
    
    <div style="text-align: center; padding: 28px 0;">
      <h1 style="margin: 0; font-size: 26px;">
        <span style="background: linear-gradient(90deg, #d946ef, #9333ea, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          Password Reset Successful
        </span>
      </h1>
    </div>

    <div style="padding: 40px;">
      <h2>
        Hey <span style="background: linear-gradient(90deg, #d946ef, #9333ea, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${username}</span>,
      </h2>
      <p>Your password for <strong style="background: linear-gradient(90deg, #d946ef, #9333ea, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Auth Application</strong> has been updated successfully ✅</p>
      <p>If this wasn’t you, please contact our <a href="mailto:support@auth-application.com" style="color:#111827;">support team</a> immediately.</p>
    </div>

    <div style="text-align: center; background: #f3f4f6; padding: 14px; font-size: 12px; color: #6b7280; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px;">
      © ${new Date().getFullYear()} Auth Application. Stay safe ⚡
    </div>
  </div>
</body>
</html>
`;

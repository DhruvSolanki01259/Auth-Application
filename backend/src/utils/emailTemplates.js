export const verifyEmailTemplate = (username, verificationCode) => `
  <div style="font-family: Arial, sans-serif; color: #333;">
    <h2 style="color: #1a73e8;">Hey ${username} 👋</h2>
    <p>Welcome to <strong>Auth Application</strong>! To verify your account, please use the verification code below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <h1 style="color: #1a73e8; letter-spacing: 3px;">${verificationCode}</h1>
    </div>
    <p>This code will expire in <strong>24 hours</strong>. Enter it on the verification page to complete your registration.</p>
    <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
    <p style="font-size: 14px; color: #777;">If you didn’t request this, you can safely ignore this email.</p>
  </div>
`;

export const resetPasswordEmailTemplate = (username, resetLink) => `
  <div style="font-family: Arial, sans-serif; color: #333;">
    <h2 style="color: #1a73e8;">Hi ${username},</h2>
    <p>We received a request to reset your password for your <strong>Auth Application</strong> account.</p>
    <p>Click the button below to reset your password:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="${resetLink}" style="
        background-color: #1a73e8;
        color: white;
        text-decoration: none;
        padding: 12px 24px;
        border-radius: 6px;
        font-weight: bold;
        display: inline-block;">
        Reset Password
      </a>
    </div>
    <p>This link will expire in <strong>1 hour</strong>. If you didn’t request this, you can safely ignore this email.</p>
    <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
    <p style="font-size: 14px; color: #777;">Stay safe,<br>The Auth Application Team 🚀</p>
  </div>
`;

export const resetSuccessEmailTemplate = (username) => `
  <div style="font-family: Arial, sans-serif; color: #333;">
    <h2 style="color: #1a73e8;">Hey ${username},</h2>
    <p>Your password for <strong>Auth Application</strong> has been successfully reset ✅</p>
    <p>If you didn’t perform this action, please <a href="mailto:support@Auth Application.com" style="color:#1a73e8;">contact our support team</a> immediately.</p>
    <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
    <p style="font-size: 14px; color: #777;">Thanks for keeping your account secure,<br>The Auth Application Team ⚡</p>
  </div>
`;

export const welcomeEmailTemplate = (username) => `
  <div style="font-family: Arial, sans-serif; color: #333;">
    <h2 style="color: #1a73e8;">Welcome aboard, ${username}! 🎉</h2>
    <p>We’re thrilled to have you join <strong>Auth Application</strong> — your journey to secure and seamless authentication starts now.</p>
    <p>Here’s what you can do next:</p>
    <ul style="line-height: 1.6;">
      <li>✅ Explore your new account dashboard</li>
      <li>🔐 Keep your profile updated for better security</li>
      <li>🚀 Enjoy fast, reliable authentication on all your devices</li>
    </ul>
    <div style="text-align: center; margin: 30px 0;">
      <a href="https://auth-application.com/login" style="
        background-color: #1a73e8;
        color: white;
        text-decoration: none;
        padding: 12px 24px;
        border-radius: 6px;
        font-weight: bold;
        display: inline-block;">
        Go to Dashboard
      </a>
    </div>
    <p>We’re here to make authentication effortless — if you ever need help, just hit reply or visit our <a href="https://auth-application.com/support" style="color:#1a73e8;">Support Center</a>.</p>
    <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
    <p style="font-size: 14px; color: #777;">Welcome again, ${username}!<br>The Auth Application Team 🚀</p>
  </div>
`;

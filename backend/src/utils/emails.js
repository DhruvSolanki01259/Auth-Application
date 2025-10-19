import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const verificationCodeEmail = async (to, subject, htmlContent) => {
  try {
    const response = await resend.emails.send({
      from: "Auth-Application <onboarding@resend.dev>",
      to,
      subject,
      html: htmlContent,
    });
    // console.log("Email sent:", response);
    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to Send Verification Email");
  }
};

export const welcomeEmail = async (to, subject, htmlContent) => {
  try {
    const response = await resend.emails.send({
      from: "Auth-Application <onboarding@resend.dev>",
      to,
      subject,
      html: htmlContent,
    });
    console.log("Email send: ", response);
    return response;
  } catch (error) {
    console.error("Error sending email: ", error);
    throw new Error("Failed to Send Welcome Email");
  }
};

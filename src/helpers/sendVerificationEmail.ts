import { resend } from "@/lib/resend";
import EmailVerificationTemplate from "../../emails/emailVerification";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "Email Verification OTP",
      react: EmailVerificationTemplate({ username,otp:verifyCode }),
    });    
    return { success: true, message: "verification email sent successfully" };
    
  } catch (emailError) {
    console.error("error sending verification email", emailError);
    return { success: false, message: "failed to send verification email" };
  }
}

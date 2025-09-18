import * as React from 'react';

interface VerificationEmailProps {
  username: string;
  otp:string;
}

function EmailVerificationTemplate({ username, otp }: VerificationEmailProps) {
  return (
    <div>
      Hey {username},Thank you for registering. Please use the following verification
            code to complete your registration:{otp}
    </div>
  );
}

export default EmailVerificationTemplate
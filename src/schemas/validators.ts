import { z } from "zod";

// Username validation
export const usernameValidator = z
  .string()
  .min(3, { message: "Username must be at least 3 characters long" })
  .max(20, { message: "Username must not exceed 20 characters" })
  .regex(/^[a-zA-Z0-9_]+$/, {
    message: "Username can only contain letters, numbers, and underscores",
  });

// Email validation
export const emailValidator = z
  .string()
  .email({ message: "Invalid email format" });

// Password validation
export const passwordValidator = z
  .string()
  .min(8, { message: "Password must be at least 8 characters long" })
  .regex(/[A-Z]/, {
    message: "Password must contain at least one uppercase letter",
  })
  .regex(/[a-z]/, {
    message: "Password must contain at least one lowercase letter",
  })
  .regex(/[0-9]/, {
    message: "Password must contain at least one number",
  })
  .regex(/[@$!%*?&]/, {
    message: "Password must contain at least one special character (@$!%*?&)",
  });

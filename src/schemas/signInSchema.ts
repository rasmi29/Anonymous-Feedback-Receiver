import { z } from "zod";
import { emailValidator, passwordValidator } from "./validators";

export const signInSchema = z.object({
  body: z.object({
    email: emailValidator,
    password: passwordValidator,
  }),
});

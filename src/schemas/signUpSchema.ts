import { z } from "zod";
import { usernameValidator, emailValidator, passwordValidator } from "./validators";

export const signUpSchema = z.object({
  body: z.object({
    username: usernameValidator,
    email: emailValidator,
    password: passwordValidator,
  }),
});

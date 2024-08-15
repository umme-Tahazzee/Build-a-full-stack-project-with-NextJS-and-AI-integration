import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "User name must be at least 2 characters")
  .max(20, "User name must be no more than 20 character")
  .regex(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    "username must not content special character"
  );

export const signUpSchema = z.object({
    username :   usernameValidation,
    email : z.string().email({message: "invalid email address"}),
    password : z.string().min(6, {message: "password be at leat 6 characters"}),
    
})
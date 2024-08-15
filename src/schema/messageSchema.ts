import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(8, { message: "Content must be at leat 8 characters" })
    .max(300, { message: "Content must be no longer 300 characters" }),
});

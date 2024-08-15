import { z } from "zod";

export const verifySchema = z.object({
  code: z.string().length(5, { message: "verification must be 6 digit" }),
});

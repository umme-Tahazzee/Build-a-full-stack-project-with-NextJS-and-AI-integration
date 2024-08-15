import { z } from "zod";

export const signInschema = z.object({
   identifier: z.string(),
   password: z.string(),
   
});

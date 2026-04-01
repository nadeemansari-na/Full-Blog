import { z } from "zod";
const check = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
});
const postcheck = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});
const blogcheck = z.object({
    title: z.string(),
    content: z.string()
});
const postblog = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number().optional()
});
//# sourceMappingURL=index.js.map
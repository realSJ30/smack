import { z } from "zod"

/*
    GLOBAL reusable zod variables
*/
const emailZod = z.string().min(1, { message: "Email required." })
    .email({ message: "Incorrect email format." });


/*
    SCHEMAS
*/
export const loginSchema = z.object({
    email: emailZod,
    password: z.string().min(8, { message: "Password incorrect." })
})

export const signUpSchema = z.object({
    email: emailZod,
    password: z.string().min(8, { message: "Password too weak." }),
    confirmPassword: z.string().min(8, { message: "Password too weak." })
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});
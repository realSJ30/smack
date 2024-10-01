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
    name: z.string().min(2, { message: "Name must be more than 2 characters." }),
    email: emailZod,
    password: z.string().min(8, { message: "Password too weak." }),
    confirmPassword: z.string().min(8, { message: "Password too weak." })
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

export const createWorkspaceSchema = z.object({
    name: z.string().min(3, { message: "Workspace must be more than 3 characters." }),
})

export const createChannelSchema = z.object({
    name: z.string().min(1, { message: "Channel must be more than 1 character." }),
})


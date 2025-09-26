import { z } from "zod";

export const createLinkSchema = z.object({
    url: z
        .string()
        .min(1, { message: "URL is required." })
        .url({
            message: "Please enter a valid URL. Include http:// or https://",
        })
        .regex(/^(?!.*(?:http|https):\/\/(?:slug|slugr)\.vercel\.app).*$/, {
            message: "You cannot redirect to the Slug url.",
        })
        // not contain any blank spaces
        .regex(/^\S+$/, {
            message: "URL must not contain any blank spaces.",
        }),
    slug: z
        .string({ message: 'Please enter a valid slug' })
        .min(4, { message: 'Slug must be at least 4 characters long' })
        .regex(/^[a-zA-Z0-9_-]*$/, { message: 'Custom short link nust not contain any blank space or special characters' })
});

export type CreateLink = z.infer<typeof createLinkSchema>
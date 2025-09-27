'use server'

import { CreateLink } from "@/schemas"
import { db } from "../db"
import { linksTable } from "../db/schema"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"

export const getAllLinks = async () => {
    return await db.select().from(linksTable).all()
}

export const checkIfSlugExists = async (slug: string) => {
    const exists = await db
        .select()
        .from(linksTable)
        .where(eq(linksTable.slug, slug))
        .get()

    return !!exists
}

export const createLink = async (values: CreateLink) => {
    await db.insert(linksTable).values({ ...values, visits: 0 })

    revalidatePath('/')
}

export const removeLink = async (id: number) => {
    await db.delete(linksTable).where(eq(linksTable.id, id))

    revalidatePath('/')
}

interface UrlFromServer {
    error: boolean
    message: string
    redirect404?: boolean
    url?: string
}

export const getUrlBySlug = async (slug: string): Promise<UrlFromServer> => {
    try {
        const link = await db
            .select()
            .from(linksTable)
            .where(eq(linksTable.slug, slug))
            .get()

        if (!link) {
            return {
                error: true,
                message: 'Link not found',
                redirect404: true
            }
        }

        // Update counter clicks
        await db
            .update(linksTable)
            .set({ visits: link.visits + 1 })
            .where(eq(linksTable.id, link.id))

        return {
            error: false,
            message: 'Link found',
            url: link.url
        }
    } catch (error) {
        console.error(error)
        return {
            error: true,
            message: 'An unexpected error has occurred. Please try again later.',
        }
    }
}
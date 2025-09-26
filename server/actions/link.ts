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
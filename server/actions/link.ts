'use server'

import { CreateLink } from "@/schemas"
import { db } from "../db"
import { linksTable } from "../db/schema"
import { eq } from "drizzle-orm"

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
}
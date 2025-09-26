import { getAllLinks } from "@/server/actions/link"
import Link from "./Link"

export default async function GridFromLinks() {
    const links = await getAllLinks()
    return (
        <div className="max-w-3xl mx-auto mt-20 grid grid-cols-2 gap-2">
            {
                links.reverse().map(link => (
                    <Link key={link.id} link={link} />
                ))
            }
        </div>
    )
}
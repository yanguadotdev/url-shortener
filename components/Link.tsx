import type { Link } from "@/schemas";

export default function Link({ link }: { link: Link }) {
    return (
        <div className="p-4 border rounded-sm border-gray-200 leading-none relative">
            <p className="p-0.5 bg-gray-50 rounded-sm inline-block border border-gray-100 mb-2">/{link.slug}</p>
            <p className="text-ellipsis w-full whitespace-nowrap overflow-hidden text-sm text-gray-600" title={link.url}>{link.url}</p>
        </div>
    )
}
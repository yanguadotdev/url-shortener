import type { Link } from "@/schemas";
import ShowClicks from "./ShowClicks";
import CopyLink from "./CopyLink";
import EditLink from "./EditLink";
import DeleteLink from "./DeleteLink";

export default function Link({ link }: { link: Link }) {
    return (
        <div className="p-4 border rounded-sm border-gray-200 leading-none relative">
            <div className="absolute top-4 right-4 flex items-center gap-3 text-sm">
                <ShowClicks visits={link.visits} />
                <CopyLink slug={link.slug} />
                <EditLink slug={link.slug} id={link.id} url={link.url} />
                <DeleteLink id={link.id} />
            </div>
            <p className="p-0.5 bg-gray-50 rounded-sm inline-block border border-gray-100 mb-4">/{link.slug}</p>
            <p className="text-ellipsis w-full whitespace-nowrap overflow-hidden text-sm text-gray-600" title={link.url}>{link.url}</p>
        </div>
    )
}
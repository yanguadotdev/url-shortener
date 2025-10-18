'use client'
import { removeLink } from "@/server/actions/link";
import { TrashIcon } from "lucide-react";
import { toast } from "sonner";

export default function DeleteLink({ id }: { id: number }) {
    const handleDelete = () => {
        toast.promise(removeLink(id), {
            loading: 'Deleting link...',
            success: 'Link deleted successfully',
            error: 'Failed to delete link'
        })
    }
    return (
        <button className="text-red-500 hover:text-red-600" onClick={handleDelete}>
            <TrashIcon width={16} />
        </button>
    )
} 
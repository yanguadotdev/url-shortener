'use client'
import { CopyIcon } from "lucide-react";
import { useCopyToClipboard } from "../hooks/useClipboardCopy";
import { toast } from "sonner";

export default function CopyLink({ slug }: { slug: string }) {
    const URL_TO_COPY = `${process.env.NEXT_PUBLIC_URL}/${slug}`
    const [, copy] = useCopyToClipboard()

    const handleCopy = () => {
        copy(URL_TO_COPY)
            .then(() => {
                toast.success("Link copied to clipboard", {
                    description: `${URL_TO_COPY}`,
                });
            })
            .catch((error) => {
                toast.error(
                    "An unexpected error has occurred. Please try again later.",
                    {
                        description: error,
                    },
                );
            });
    }
    return (
        <button onClick={handleCopy} className="text-gray-600 hover:text-gray-800">
            <CopyIcon width={16} />
        </button>
    )
}
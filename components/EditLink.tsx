'use client'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { CreateLink } from "@/schemas"
import { LucideDices, SettingsIcon, XIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createLinkSchema } from "@/schemas"

export default function EditLink() {

    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<CreateLink>({
        resolver: zodResolver(createLinkSchema)
    })
    const randomizeSlug = () => {
        const randomString = Math.random().toString(36).substring(2, 7)
        setValue('slug', randomString)
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="text-gray-600 hover:text-gray-800">
                    <SettingsIcon width={16} />
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Share link</DialogTitle>
                    <DialogDescription>
                        Customize your shortened URL by adding a custom slug.
                    </DialogDescription>
                </DialogHeader>
                <form className="mt-4">
                    <div>
                        <div className="flex items-center text-sm gap-2 rounded-sm border h-10 border-gray-200 focus:border-gray-400 p-0.5 pl-4">
                            <span>https://shorturl.vercel.app/</span>
                            <input
                                type="text"
                                placeholder="[slug]"
                                className="w-full text-sm flex-1 text-grey-700 h-full"
                                {...register('slug')}
                            />
                            <button
                                type="button"
                                className="px-4 py-2 rounded-sm text-white bg-black h-full flex items-center gap-2"
                                onClick={randomizeSlug}
                            >
                                <LucideDices width={16} />
                                <span>Randomize</span>
                            </button>
                        </div>
                        {
                            errors.slug && (
                                <small className="text-red-500 text-xs">
                                    {errors.slug.message}
                                </small>
                            )
                        }
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}

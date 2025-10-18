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
import { useState } from "react"

export default function EditLink() {
    const [open, setOpen] = useState(false)
    const URL_TO_COPY = `${process.env.NEXT_PUBLIC_URL}/`
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<CreateLink>({
        resolver: zodResolver(createLinkSchema)
    })
    const randomizeSlug = () => {
        const randomString = Math.random().toString(36).substring(2, 7)
        setValue('slug', randomString)
    }
    const handleClose = () => {
        setOpen(false)
        reset()
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className="text-gray-600 hover:text-gray-800">
                    <SettingsIcon width={16} />
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Update slug</DialogTitle>
                    <DialogDescription>
                        Update the slug of your shortened URL.
                    </DialogDescription>
                </DialogHeader>
                <form className="mt-4">
                    <div>
                        <div className="flex items-center text-sm gap-2 rounded-sm border h-10 border-gray-200 focus:border-gray-400 p-0.5 px-4">
                            <span>{URL_TO_COPY}</span>
                            <input
                                type="text"
                                placeholder="[slug]"
                                className="w-full text-sm flex-1 text-grey-700 h-full"
                                {...register('slug')}
                            />
                        </div>
                        {
                            errors.slug && (
                                <small className="text-red-500 text-xs">
                                    {errors.slug.message}
                                </small>
                            )
                        }

                        <div className="flex justify-end gap-4 mt-4">
                            <button type="button" onClick={handleClose}>Cancel</button>
                            <button type="submit" className="px-4 py-2 rounded-sm text-white bg-black h-full flex items-center gap-2">Update</button>
                        </div>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}

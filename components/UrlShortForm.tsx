'use client'
import { CreateLink, createLinkSchema } from '@/schemas'
import { LucideLoader, LucideDices } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export default function UrlShortForm() {
    const [isLoading, setIsLoading] = useState(false)

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<CreateLink>({
        resolver: zodResolver(createLinkSchema)
    })

    const onSubmit = async (values: CreateLink) => {
        console.log(values)
    }

    const randomizeSlug = () => {
        const randomString = Math.random().toString(36).substring(2, 7)
        setValue('slug', randomString)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3 rounded-sm p-4 shadow-sm bg-gray-50/50 max-w-xl mx-auto leading-none"
        >
            <div className="flex gap-2">
                <div className="flex-1">
                    <input
                        type="text"
                        placeholder="Enter your URL"
                        className="w-full text-sm text-grey-600 h-10 px-4 py-2 rounded-sm border border-gray-200 focus:border-gray-400"
                        {...register('url')}
                    />
                    {errors.url && (
                        <small className="text-red-500 text-xs">
                            {errors.url.message}
                        </small>
                    )}
                </div>
                <button type="submit" className="px-4 py-2 rounded-sm text-white bg-black flex items-center gap-2">
                    {isLoading && <LucideLoader width={16} className="animate-spin" />}
                    <span>Shorten</span>
                </button>
            </div>

            <div className="mt-4">
                <small className="text-gray-500 mb-1 block">
                    Customize your shortened URL by adding a custom slug.
                </small>
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
            </div>
        </form>
    )
}
export default function UrlShortForm() {
    return (
        <form className="flex flex-col gap-3 rounded-sm p-4 shadow-sm bg-gray-50/50 max-w-xl mx-auto leading-none">
            <div className="flex gap-2">
                <div className="flex-1">
                    <input type="text" placeholder="Enter your URL" className="w-full text-sm text-grey-600 h-10 px-4 py-2 rounded-sm border border-gray-200 focus:border-gray-400" />
                </div>
                <button type="submit" className="px-4 py-2 rounded-sm text-white bg-black">Shorten</button>
            </div>

            <div className="mt-4">
                <small className="text-gray-500 mb-1 block">
                    Customize your shortened URL by adding a custom slug.
                </small>
                <div>
                    <div className="flex items-center text-sm gap-2 rounded-sm border h-10 border-gray-200 focus:border-gray-400 p-0.5 pl-4">
                        <span>https://shorturl.app/</span>
                        <input type="text" placeholder="[slug]" className="w-full text-sm flex-1 text-grey-700 h-full" />
                        <button type="button" className="px-4 py-2 rounded-sm text-white bg-black h-full block">
                            Randomize
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}
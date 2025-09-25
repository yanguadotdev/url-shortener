export default function UrlShortForm() {
    return (
        <form className="flex flex-col gap-3 rounded-sm p-4 shadow-sm bg-gray-50/50 max-w-xl mx-auto">
            <div className="flex gap-2">
                <div className="flex-1">
                    <input type="text" placeholder="Enter your URL" className="w-full text-sm text-grey-700 h-10 px-4 py-2 rounded-sm border border-gray-200 focus:border-gray-400" />
                </div>
                <button type="submit" className="px-4 py-2 rounded-sm text-white bg-black">Shorten</button>
            </div>
        </form>
    )
}
import UrlShortForm from "@/components/UrlShortForm";
import GridFromLinks from "@/components/GridFromLinks";

export default function Home() {
  return (
    <main>
      <div className='flex flex-col gap-3 mt-20 mb-6'>
        <h1 className='text-2xl font-bold text-center'>URL Shortener</h1>

        <p className='text-gray-500 uppercase text-sm text-center'>
          Shorten your long URLs with our fast and reliable URL shortener.
        </p>
      </div>
      <UrlShortForm />

      <GridFromLinks />
    </main>
  )
}

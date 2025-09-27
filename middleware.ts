import { NextResponse, NextRequest } from 'next/server'
import { getUrlBySlug } from './server/actions/link'

export async function middleware(request: NextRequest) {
  const { nextUrl } = request
  const slugRoute = nextUrl.pathname.split('/').pop() || ''

  const isHome = nextUrl.pathname === '/'
  if (isHome) {
    return NextResponse.next()
  }

  const objUrl = await getUrlBySlug(slugRoute)

  if (objUrl.error) {
    return NextResponse.json({ error: true, message: objUrl.message }, { status: 404 })
  }

  if (objUrl.url) {
    return NextResponse.redirect(new URL(objUrl.url, nextUrl))
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
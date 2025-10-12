import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const nextIntlMiddleware = createMiddleware({
  locales: ['en', 'zh'],
  defaultLocale: 'en',
  localePrefix: 'always',
});

export default function middleware(req: NextRequest) {
  console.log('[middleware] pathname:', req.nextUrl.pathname);
  return nextIntlMiddleware(req);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'], // 官方最新 matcher
};
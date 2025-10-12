import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { routing } from '@/routing';

const nextIntlMiddleware = createMiddleware({
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
  localePrefix: 'as-needed', // 只有默认语言才加前缀， 'always': 所有加
});

export default function middleware(req: NextRequest) {
  console.log('[middleware] pathname:', req.nextUrl.pathname);
  return nextIntlMiddleware(req);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'], // 官方最新 matcher
};
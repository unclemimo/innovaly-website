import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './src/i18n/routing';

export default createMiddleware({
  locales: Array.from(locales),
  defaultLocale,
  localePrefix: 'always',
});

export const config = {
  matcher: ['/i18n-demo', '/i18n-demo/:path*']
};

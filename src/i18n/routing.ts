import {createNavigation} from 'next-intl/navigation';

export const locales = ['en', 'es'] as const;
export type AppLocale = typeof locales[number];

export const defaultLocale: AppLocale = 'en';

export const {Link, useRouter, usePathname, redirect, getPathname} = createNavigation({
  locales: Array.from(locales),
  defaultLocale,
  localePrefix: 'always'
});

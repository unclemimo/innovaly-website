'use client';

import {useRouter, usePathname} from '@/i18n/routing';
import {useLocale} from 'next-intl';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchTo = (nextLocale: 'en' | 'es') => {
    // Keep same pathname, just change locale in URL
    router.replace(pathname, {locale: nextLocale});
  };

  return (
    <div className="inline-flex items-center gap-2">
      <button
        onClick={() => switchTo('en')}
        className={`px-3 py-1.5 rounded-md border text-sm ${
          locale === 'en'
            ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 border-zinc-900 dark:border-white'
            : 'border-zinc-200/70 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900'
        }`}
        aria-pressed={locale === 'en'}
      >
        English
      </button>
      <button
        onClick={() => switchTo('es')}
        className={`px-3 py-1.5 rounded-md border text-sm ${
          locale === 'es'
            ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 border-zinc-900 dark:border-white'
            : 'border-zinc-200/70 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900'
        }`}
        aria-pressed={locale === 'es'}
      >
        Español
      </button>
    </div>
  );
}

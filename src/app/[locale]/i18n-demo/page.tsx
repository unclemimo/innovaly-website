import {getTranslations} from 'next-intl/server';
import {LanguageSwitcher} from '@/components/LanguageSwitcher';

export default async function I18nDemoPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({namespace: 'demo'});
  const common = await getTranslations({namespace: 'common'});

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold">{common('title')}</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">{common('description')}</p>

      <div className="mt-6 rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-4">
        <p className="text-lg">{t('hello')}</p>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {t('currentLocale', {locale})}
        </p>
      </div>

      <div className="mt-6">
        <LanguageSwitcher />
      </div>
    </div>
  );
}

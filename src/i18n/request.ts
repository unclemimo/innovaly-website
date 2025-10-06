import {getRequestConfig} from 'next-intl/server';
// import {headers} from 'next/headers';

export default getRequestConfig(async ({locale}) => {
  let messages: Record<string, string>;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    messages = (await import(`../../messages/en.json`)).default;
  }

  // Note: Accept-Language detection is handled in middleware; headers available here if needed
  // const acceptLanguage = headers().get('accept-language') || '';

  return {
    messages,
    timeZone: 'UTC',
    locale
  };
});

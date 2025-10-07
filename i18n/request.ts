import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  let messages: Record<string, string>;
  try {
    messages = (await import(`../messages/${locale}.json`)).default;
  } catch {
    messages = (await import(`../messages/en.json`)).default;
  }

  return {
    messages,
    timeZone: 'UTC',
    locale
  };
});

import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  // 这里可以根据请求动态确定语言
  let curLocale = await locale;
  
  // 确保语言在支持列表中
  if (!curLocale || !routing.locales.includes(curLocale as any)) {
    curLocale = routing.defaultLocale;
  }

  return {
    locale: curLocale,
    messages: (await import(`../messages/${curLocale}.json`)).default
  };
});
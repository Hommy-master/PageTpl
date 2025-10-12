import { getRequestConfig } from 'next-intl/server';
import { routing } from '@/routing';

export default getRequestConfig(async ({ locale }) => {
  // 如果没有提供 locale，使用默认语言
  if (!locale) {
    locale = routing.defaultLocale;
  }

  // 确保请求的语言在支持的语言列表中
  if (!routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
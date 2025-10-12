export const locales = ['en', 'zh'] as const;
export const defaultLocale = 'en' as const;
export const localePrefix = 'as-needed'; // 或者 'always'

export type Locale = (typeof locales)[number];
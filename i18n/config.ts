export const locales = ['en', 'zh'] as const;
export const defaultLocale = 'en' as const;
export const localePrefix = 'always'; // 或者 'as-needed'

export type Locale = (typeof locales)[number];
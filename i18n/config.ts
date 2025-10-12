export const locales = ['en', 'zh'] as const;
export const languages = [
  {key: locales[0], label: 'English'},
  {key: locales[1], label: '中文'},
];
export const defaultLocale = 'en' as const;
export const localePrefix = 'as-needed'; // 或者 'always'

export type Locale = (typeof locales)[number];
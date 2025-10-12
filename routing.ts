export const routing = {
    locales: ['en', 'zh', 'es'], // 支持的语言
    defaultLocale: 'en' as const
  };
  
  export type Locale = (typeof routing)['locales'][number];
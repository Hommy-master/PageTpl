export const routing = {
  locales: ["en", "zh"], // 支持的语言
  defaultLocale: "zh" as const,
};

export type Locale = (typeof routing)["locales"][number];

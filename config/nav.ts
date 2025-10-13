// config/nav.ts
export type NavItem = {
  key: string; // i18n 键
  href: string; // 路由
};

export const navItems: NavItem[] = [
  { key: "generator", href: "/generator" },
  { key: "showcase", href: "/showcase" },
  { key: "tools", href: "/tools" },
  { key: "pricing", href: "/pricing" },
];

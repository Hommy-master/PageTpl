export type NavItem = {
  key: string; // i18n 键
  href: string; // 路由
};

const navKeys = ['generator', 'showcase', 'tools', 'pricing'];

export const navItems: NavItem[] = (() => {
  return navKeys.map((key) => ({ key, href: `/${key}` }));
})();

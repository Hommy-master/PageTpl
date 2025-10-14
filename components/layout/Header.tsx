'use client';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import { navItems } from '@/lib/consts/nav';
import { CompactLanguageSwitcher } from '@/components/features/LocaleSwitcher';
import LoginButton from '@/components/features/LoginButton';
import { ThemeSwitcher } from '@/components/features/ThemeSwitcher';

export default function TopNav() {
  const t = useTranslations('nav'); // 对应 namespace
  return (
    <Navbar maxWidth="2xl" isBordered className="border-b-yellow-200">
      <NavbarBrand>
        <Link color="foreground" href="/" className="font-bold text-inherit text-amber-600 hover:text-amber-400">
          Demo
        </Link>
      </NavbarBrand>

      <NavbarContent className="gap-4" justify="center">
        {navItems.map(({ key, href }) => (
          <NavbarItem key={key}>
            <Link href={href} color="foreground" className="hover:text-amber-600">
              {t(key)}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <CompactLanguageSwitcher />
        </NavbarItem>
        <NavbarItem>
          <LoginButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

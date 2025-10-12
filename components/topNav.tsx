'use client';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from '@nextui-org/react';
import {useTranslations} from 'next-intl';
import LocaleSwitcher from './localeSwitcher';

export default function TopNav() {
  const t = useTranslations('nav');

  return (
    <Navbar maxWidth="full" isBordered>
      <NavbarBrand>
        <span className="font-bold text-inherit">Demo</span>
      </NavbarBrand>

      <NavbarContent className="gap-4" justify="center">
        <NavbarItem><Link color="foreground" href="/">{t('home')}</Link></NavbarItem>
        <NavbarItem><Link color="foreground" href="/about">{t('about')}</Link></NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/login" variant="flat">
            {t('login')}
          </Button>
        </NavbarItem>
        <NavbarItem>
          <LocaleSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
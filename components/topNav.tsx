'use client';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from '@nextui-org/react';
import {useTranslations} from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';

export default function TopNav() {
  const t = useTranslations('nav');

  return (
    <Navbar maxWidth="2xl" isBordered className='border-b-yellow-200'>
      <NavbarBrand>
        <span className="font-bold text-inherit">Demo</span>
      </NavbarBrand>

      <NavbarContent className="gap-4" justify="center">
        <NavbarItem><Link color="foreground" href="/" className='hover:text-amber-600'>{t('home')}</Link></NavbarItem>
        <NavbarItem><Link color="foreground" href="/about" className='hover:text-amber-600'>{t('about')}</Link></NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button color="warning">
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

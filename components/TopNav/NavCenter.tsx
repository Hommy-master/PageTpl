'use client'

import { navItems } from '@/config/nav'
import { useTranslations } from 'next-intl'
import {NavbarContent, NavbarItem, Link,} from '@nextui-org/react';

export default function NavCenter() {
  const t = useTranslations('nav')   // 对应 namespace

  return (
    <NavbarContent className="gap-4" justify="center">
      {navItems.map(({ key, href }) => (
        <NavbarItem key={key}>
          <Link
            href={href}
            color="foreground"
            className="hover:text-amber-600"
          >
            {t(key)}
          </Link>
        </NavbarItem>
      ))}
    </NavbarContent>
  )
}
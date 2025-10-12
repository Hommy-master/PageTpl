'use client';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from '@nextui-org/react';
import {useRouter, usePathname} from 'next/navigation';
import {useTransition} from 'react';
import { languages } from '@/i18n/config';

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function onChangeLocale(nextLocale: string) {
    startTransition(() => {
      // 把当前路径前缀换掉即可
      const segments = pathname.split('/');
      segments[1] = nextLocale;
      router.replace(segments.join('/'));
    });
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button size="sm" variant="bordered" isLoading={isPending}>
          🌐
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Select language"
        onAction={(key) => onChangeLocale(key as string)}
      >
        {languages.map((lang) => (
          <DropdownItem key={lang.key}>{lang.label}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
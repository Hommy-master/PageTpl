'use client';

import { Button, ButtonProps } from '@nextui-org/react';
import type { IconProps } from '@phosphor-icons/react';
import { MoonIcon, SunDimIcon } from '@phosphor-icons/react/dist/ssr';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const iconProps: IconProps = {
  size: 16,
  weight: 'bold',
};

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const buttonProps: ButtonProps = {
    radius: 'full',
    isIconOnly: true,
    variant: 'light',
  };

  return (
    <>
      {theme === 'dark' ? (
        <Button
          {...buttonProps}
          onPress={() => setTheme('light')}
          startContent={<MoonIcon {...iconProps} />}
        />
      ) : (
        <Button
          {...buttonProps}
          onPress={() => setTheme('dark')}
          startContent={<SunDimIcon {...iconProps} />}
        />
      )}
    </>
  );
}

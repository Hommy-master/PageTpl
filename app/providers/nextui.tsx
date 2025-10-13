"use client";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export function NextUIProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push}>
      <NextThemeProvider attribute="class" defaultTheme="light" enableSystem>
        {children}
      </NextThemeProvider>
    </NextUIProvider>
  );
}

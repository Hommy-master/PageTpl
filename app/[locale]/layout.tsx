import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import TopNav from '@/components/TopNav';
import { Providers } from '@/app/providers';

export default async function LocaleLayout({
  children,
  params, // 先不解构
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params; // 关键：await 解包
  const messages = await getMessages({ locale });// 关键！
  return (
    <html lang={locale} className="light" suppressHydrationWarning>
      <body>
        <Providers>
          <NextIntlClientProvider messages={messages} locale={locale}>
            <TopNav />
            <main className="px-6 py-4">{children}</main>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
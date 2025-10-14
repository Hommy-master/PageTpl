import { getMessages } from 'next-intl/server';
import Header from '@/components/layout/Header';
import { NextIntlProviderWrapper, NextUIProviderWrapper } from '@/app/providers';

export default async function LocaleLayout({
  children,
  params, // 先不解构
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params; // 关键：await 解包
  const messages = await getMessages({ locale }); // 关键！
  return (
    <html lang={locale} className="light" suppressHydrationWarning>
      <body>
        <NextIntlProviderWrapper messages={messages} locale={locale}>
          <NextUIProviderWrapper>
            <div className='min-h-screen bg-white dark:bg-gray-900'>
              <Header />
              <main className='flex h-screen bg-gray-50 dark:bg-gray-900 relative'>{children}</main>
            </div>
          </NextUIProviderWrapper>
        </NextIntlProviderWrapper>
      </body>
    </html>
  );
}

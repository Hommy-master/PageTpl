
import { getTranslations } from 'next-intl/server';

export default async  function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  
  const t = await getTranslations({ locale, namespace: 'about' });
  return <h1 className="text-2xl">{t('title')}</h1>;
}


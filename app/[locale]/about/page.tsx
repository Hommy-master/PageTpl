import {useTranslations} from 'next-intl';

export default function About() {
  const t = useTranslations('home');
  return <h1 className="text-2xl">{t('about')}</h1>;
}
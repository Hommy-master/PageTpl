import {useTranslations} from 'next-intl';
import {Button} from '@/components/nextui';


export default function HomePage() {
  const t = useTranslations('home');
  return (<><h1 className="text-2xl">{t('title')}</h1>
  <Button color="primary">测试</Button></>);
}
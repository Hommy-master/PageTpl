import Appraisal from '@/components/features/home/Appraisal';
import Decoration from '@/components/features/home/Decoration';
import FAQ from '@/components/features/home/FAQ';
import Features from '@/components/features/home/Features';
import Generator from '@/components/features/home/Generator';
import Showcase from '@/components/features/home/Showcase';
import Footer from '@/components/layout/Footer';
import { getTranslations } from 'next-intl/server';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: 'home' });
  return (
    <>
      <div className="mb-8 mt-4 flex justify-center">
        <span className="rounded bg-yellow-50 px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-base text-amber-800 dark:bg-yellow-900/30 dark:text-amber-200 shadow">
          Nanobanana.ai is an independent product and is not affiliate with Google or any of its
          brands
        </span>
      </div>
      <div className="hidden sm:block">
        <div className="fixed left-4 md:left-8 lg:left-16 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100 transition-opacity duration-300 hover:scale-110 pointer-events-none">
          <img
            alt="Banana decoration"
            loading="lazy"
            width="80"
            height="80"
            decoding="async"
            data-nimg="1"
            className="w-12 sm:w-14 md:w-16 lg:w-20 h-auto -rotate-12"
            style={{ color: 'transparent' }}
            src="/banana-decoration.png"
          />
        </div>
        <div className="fixed right-4 md:right-8 lg:right-16 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100 transition-opacity duration-300 hover:scale-110 pointer-events-none">
          <img
            alt="Banana decoration"
            loading="lazy"
            width="80"
            height="80"
            decoding="async"
            data-nimg="1"
            className="w-12 sm:w-14 md:w-16 lg:w-20 h-auto rotate-12 scale-x-[-1]"
            style={{ color: 'transparent' }}
            src="/banana-decoration.png"
          />
        </div>
      </div>

      <Decoration />

      <Generator />

      <Features />

      <Showcase />

      <Appraisal />

      <FAQ />

      <Footer />
    </>
  );
}

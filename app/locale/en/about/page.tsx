import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations();
  return (
    <main>
      <h1>{t('about.title', { defaultValue: 'About' })}</h1>
      <p>{t('about.description', { defaultValue: 'This is the about page.' })}</p>
    </main>
  );
}

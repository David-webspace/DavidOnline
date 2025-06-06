import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations();
  return (
    <main>
      <h1>{t('greeting')}</h1>
      <p>{t('footer.newsletter')}</p>
    </main>
  );
}

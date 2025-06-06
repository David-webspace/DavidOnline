import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations();
  return (
    <main>
      <h1>{t('about.title', { defaultValue: '关于' })}</h1>
      <p>{t('about.description', { defaultValue: '这是关于页面。' })}</p>
    </main>
  );
}

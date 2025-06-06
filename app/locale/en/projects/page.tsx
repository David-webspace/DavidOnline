import { useTranslations } from 'next-intl';

export default function ProjectsPage() {
  const t = useTranslations();
  return (
    <main>
      <h1>{t('projects.title', { defaultValue: 'Projects' })}</h1>
      <p>{t('projects.description', { defaultValue: 'Here are some of my projects.' })}</p>
      {/* List your projects here, using translations as needed */}
    </main>
  );
}

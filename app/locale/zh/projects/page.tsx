import { useTranslations } from 'next-intl';

export default function ProjectsPage() {
  const t = useTranslations();
  return (
    <main>
      <h1>{t('projects.title', { defaultValue: '项目' })}</h1>
      <p>{t('projects.description', { defaultValue: '以下是我的一些项目。' })}</p>
      {/* 在这里列出你的项目，并根据需要使用翻译 */}
    </main>
  );
}

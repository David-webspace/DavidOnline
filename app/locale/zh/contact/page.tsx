import { useTranslations } from 'next-intl';
import Link from "../../components/Link";

export default function ContactPage() {
  const t = useTranslations();
  return (
    <main>
      <h1>{t('contact', { defaultValue: '联系' })}</h1>
      <p>{t('contact.description', { defaultValue: '欢迎联系我！' })}</p>
      <Link href="/zh">{t('backToHome', { defaultValue: '返回首页' })}</Link>
    </main>
  );
}

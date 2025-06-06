import { useTranslations } from 'next-intl';
import Link from "../../components/Link";

export default function ContactPage() {
  const t = useTranslations();
  return (
    <main>
      <h1>{t('contact', { defaultValue: 'Contact' })}</h1>
      <p>{t('contact.description', { defaultValue: 'Feel free to reach out!' })}</p>
      <Link href="/en">{t('backToHome', { defaultValue: 'Back to Home' })}</Link>
    </main>
  );
}

"use client";
import { usePathname, useRouter } from "next/navigation";

const languages = [
  { code: "zh", label: "中文" },
  { code: "en", label: "English" },
];

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();

  // 判断当前语言
  const currentLocale = pathname.startsWith("/en") ? "en" : "zh";

  function changeLanguage(e: React.ChangeEvent<HTMLSelectElement>) {
    const newLocale = e.target.value;
    let newPath = pathname;

    if (newLocale === "zh") {
      // 切换到中文，去掉/en  
      newPath = pathname.replace(/^\/en/, "") || "/";
    } else {
      // 切换到英文，加上/en
      if (!pathname.startsWith("/en")) {
        newPath = "/en" + (pathname === "/" ? "" : pathname);
      }
    }
    router.push(newPath);
  }

  return (
    <select
      value={currentLocale}
      onChange={changeLanguage}
      className="border px-2 py-1 rounded bg-white text-black"
      aria-label="Select language"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}

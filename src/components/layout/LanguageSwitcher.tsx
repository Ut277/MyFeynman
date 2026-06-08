"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { locales, switchLocalePath, type Locale } from "@/i18n/config";
import { useTranslations } from "@/i18n/LocaleProvider";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const { locale, t } = useTranslations();

  return (
    <div
      className="flex items-center rounded-full border border-navy/10 bg-white p-0.5 text-xs font-semibold"
      role="group"
      aria-label="Language"
    >
      {locales.map((loc) => {
        const isActive = locale === loc;
        const label = loc === "en" ? t.nav.languageEn : t.nav.languageHi;
        return (
          <Link
            key={loc}
            href={switchLocalePath(pathname, loc)}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              isActive
                ? "bg-orange-primary text-white"
                : "text-warm-grey hover:text-navy"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}

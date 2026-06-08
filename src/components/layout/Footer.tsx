"use client";

import Link from "next/link";
import {
  WHATSAPP_NUMBER_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/constants";
import { useTranslations } from "@/i18n/LocaleProvider";
import { localizedPath } from "@/i18n/config";

export function Footer() {
  const { locale, t } = useTranslations();

  const footerLinks = [
    { href: localizedPath(locale), label: t.nav.home },
    { href: localizedPath(locale, "/how-it-works"), label: t.nav.howItWorks },
    { href: localizedPath(locale, "/our-method"), label: t.nav.ourMethod },
    { href: localizedPath(locale, "/#classes"), label: t.nav.classes },
    { href: localizedPath(locale, "/pricing"), label: t.nav.pricing },
    { href: localizedPath(locale, "/for-tutors"), label: t.footer.forTutors },
    { href: WHATSAPP_URL, label: t.footer.contact, external: true },
  ];

  return (
    <footer className="border-t border-navy/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-primary text-sm font-bold text-white">
                MF
              </div>
              <span className="font-display text-lg font-semibold text-navy">
                MyFeynman
              </span>
            </div>
            <p className="mt-3 text-sm italic text-warm-grey">{t.footer.tagline}</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-navy transition-colors hover:text-orange-primary"
            >
              {WHATSAPP_NUMBER_DISPLAY}
            </a>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold text-navy">
              {t.footer.quickLinks}
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-warm-grey transition-colors hover:text-orange-primary"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-warm-grey transition-colors hover:text-orange-primary"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-navy/10 pt-8 text-xs text-warm-grey md:flex-row">
          <p>
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <div className="flex gap-6">
            <Link
              href={localizedPath(locale, "/privacy")}
              className="hover:text-navy"
            >
              {t.footer.privacy}
            </Link>
            <Link
              href={localizedPath(locale, "/terms")}
              className="hover:text-navy"
            >
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

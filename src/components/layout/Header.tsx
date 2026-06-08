"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLeadCapture } from "@/components/modal/LeadCaptureProvider";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { useTranslations } from "@/i18n/LocaleProvider";
import { localizedPath } from "@/i18n/config";

export function Header() {
  const { openModal } = useLeadCapture();
  const { locale, t } = useTranslations();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: localizedPath(locale), label: t.nav.home },
    { href: localizedPath(locale, "/how-it-works"), label: t.nav.howItWorks },
    { href: localizedPath(locale, "/our-method"), label: t.nav.ourMethod },
    { href: localizedPath(locale, "/#classes"), label: t.nav.classes },
    { href: localizedPath(locale, "/pricing"), label: t.nav.pricing },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-navy/5 bg-orange-light/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href={localizedPath(locale)} className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-primary text-sm font-bold text-white">
            MF
          </div>
          <span className="font-display text-lg font-semibold text-navy">
            MyFeynman
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-warm-grey transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <Button onClick={() => openModal("header")} className="!py-2.5 !px-5">
            {t.nav.bookTrial}
          </Button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={t.nav.toggleMenu}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-navy/5 md:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-navy hover:bg-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                onClick={() => {
                  setMobileOpen(false);
                  openModal("header_mobile");
                }}
                className="mt-2 w-full"
              >
                {t.nav.bookTrial}
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import { motion } from "framer-motion";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { Button } from "@/components/ui/Button";
import { useTranslations } from "@/i18n/LocaleProvider";
import { localizedPath } from "@/i18n/config";
import { WHATSAPP_URL } from "@/lib/constants";
import { trackWhatsAppClick } from "@/lib/analytics";

export function Hero() {
  const { locale, t } = useTranslations();

  return (
    <section className="relative min-h-[90vh] overflow-hidden grain-overlay">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 py-16 md:flex-row md:gap-16 md:px-6 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-navy md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-warm-grey md:text-lg">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <Button
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick()}
            >
              {t.hero.ctaPrimary}
            </Button>
            <Button
              variant="secondary"
              href={localizedPath(locale, "/#how-it-works")}
            >
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <PhoneMockup variant="hero" />
        </motion.div>
      </div>

      <div className="border-y border-navy/5 bg-white/60 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-4 text-xs font-medium text-warm-grey md:gap-x-8 md:text-sm">
          {t.hero.trust.map((item, i) => (
            <span key={item} className="flex items-center gap-2">
              {i > 0 && (
                <span className="hidden text-navy/20 md:inline">·</span>
              )}
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

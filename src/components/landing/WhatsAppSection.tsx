"use client";

import { motion } from "framer-motion";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTranslations } from "@/i18n/LocaleProvider";

export function WhatsAppSection() {
  const { t } = useTranslations();

  return (
    <section className="bg-gradient-to-b from-orange-light to-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <SectionHeading title={t.whatsapp.title} />
            <p className="-mt-6 mb-8 leading-relaxed text-warm-grey md:text-lg">
              {t.whatsapp.body}
            </p>
            <ul className="space-y-3">
              {t.whatsapp.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 text-sm text-navy md:text-base"
                >
                  <span className="mt-0.5 text-accent-green">✅</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <PhoneMockup variant="whatsapp" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTranslations } from "@/i18n/LocaleProvider";

export function IITianTutorSection() {
  const { t } = useTranslations();

  return (
    <section id="iitian-tutors" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <SectionHeading title={t.iitian.title} centered />
          <p className="mx-auto -mt-6 max-w-2xl leading-relaxed text-warm-grey md:text-lg">
            {t.iitian.body}
          </p>
          <p className="mx-auto mt-6 max-w-2xl rounded-xl bg-orange-light px-6 py-5 text-left text-sm leading-relaxed text-navy md:text-base">
            {t.iitian.languageNote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

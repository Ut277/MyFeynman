"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTranslations } from "@/i18n/LocaleProvider";

export function ProblemSection() {
  const { t } = useTranslations();

  return (
    <section className="bg-orange-light py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading title={t.problem.title} centered />

        <div className="grid gap-6 sm:grid-cols-2">
          {t.problem.cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-navy/5 bg-white p-6 shadow-sm"
            >
              <span className="text-3xl" role="img" aria-hidden>
                {card.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-navy">
                &ldquo;{card.title}&rdquo;
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-warm-grey">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTranslations } from "@/i18n/LocaleProvider";

export function TestimonialsSection() {
  const { t } = useTranslations();

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
          centered
        />

        <div className="grid gap-6 md:grid-cols-3">
          {t.testimonials.items.map((item, index) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col rounded-2xl border border-navy/5 bg-white p-6 shadow-sm"
            >
              <p className="flex-1 text-sm leading-relaxed text-warm-grey">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3 border-t border-navy/5 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-light text-xs font-bold text-orange-primary">
                  {item.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">{item.name}</p>
                  <p className="text-xs text-warm-grey">
                    {item.city} · {item.grade}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

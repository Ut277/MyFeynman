"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTranslations } from "@/i18n/LocaleProvider";

const CLASS_ICONS = ["3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣"];

export function ClassesSection() {
  const { t } = useTranslations();

  return (
    <section id="classes" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading title={t.classes.title} centered />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange-primary">
              {t.classes.classesLabel}
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {t.classes.items.map((className, i) => (
                <motion.div
                  key={className}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col gap-1 rounded-xl border border-navy/5 bg-white px-3 py-4 shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <span>{CLASS_ICONS[i] || "📚"}</span>
                    <span className="text-sm font-semibold text-navy">
                      {className}
                    </span>
                  </div>
                  <span className="pl-7 text-xs text-warm-grey">
                    {t.classes.allSubjects}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange-primary">
              {t.classes.languagesLabel}
            </h3>
            <div className="flex flex-wrap gap-2">
              {t.classes.languageNames.map((lang) => (
                <span
                  key={lang}
                  className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-navy shadow-sm ring-1 ring-navy/5"
                >
                  {lang}
                </span>
              ))}
            </div>

            <h3 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-wider text-orange-primary">
              {t.classes.boardsLabel}
            </h3>
            <div className="flex flex-wrap gap-2">
              {t.classes.boardNames.map((board) => (
                <span
                  key={board}
                  className="rounded-lg bg-orange-light px-3 py-2 text-xs font-medium text-navy"
                >
                  {board}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

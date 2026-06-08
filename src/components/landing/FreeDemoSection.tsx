"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useLeadCapture } from "@/components/modal/LeadCaptureProvider";
import { useTranslations } from "@/i18n/LocaleProvider";

export function FreeDemoSection() {
  const { openModal } = useLeadCapture();
  const { t } = useTranslations();

  return (
    <section id="free-demo" className="bg-orange-light py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <SectionHeading title={t.freeDemo.title} centered />
          <p className="mx-auto -mt-6 max-w-2xl leading-relaxed text-warm-grey md:text-lg">
            {t.freeDemo.body}
          </p>

          <ul className="mx-auto mt-10 max-w-xl space-y-4 text-left">
            {t.freeDemo.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 rounded-xl bg-white px-5 py-4 text-sm leading-relaxed text-navy shadow-sm md:text-base"
              >
                <span className="mt-0.5 text-orange-primary" aria-hidden>
                  ✓
                </span>
                {bullet}
              </li>
            ))}
          </ul>

          <Button
            className="mt-10"
            onClick={() => openModal("free_demo")}
          >
            {t.freeDemo.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

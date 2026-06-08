"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  SampleMaterialEmbed,
  SAMPLE_EMBED_HEIGHT_LG_CLASS,
} from "@/components/landing/SampleMaterialEmbed";
import { useTranslations } from "@/i18n/LocaleProvider";

export function HowItWorksSection() {
  const { t } = useTranslations();

  return (
    <section id="how-it-works" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading title={t.howItWorks.title} centered />

        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-10">
          <div
            className={`flex flex-col gap-5 lg:justify-between lg:gap-0 lg:overflow-hidden ${SAMPLE_EMBED_HEIGHT_LG_CLASS}`}
          >
            {t.howItWorks.steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="flex gap-3 lg:gap-3.5"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-primary text-xs font-bold text-white lg:h-9 lg:w-9 lg:text-sm">
                  {step.number}
                </div>
                <div className="min-w-0 pt-0.5">
                  <h3 className="text-base font-semibold leading-snug text-navy lg:text-[1.05rem]">
                    {step.title}
                  </h3>
                  <p className="mt-0.5 text-sm leading-snug text-warm-grey">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <SampleMaterialEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}

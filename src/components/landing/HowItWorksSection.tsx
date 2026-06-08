"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SampleMaterialEmbed } from "@/components/landing/SampleMaterialEmbed";
import { useTranslations } from "@/i18n/LocaleProvider";

export function HowItWorksSection() {
  const { t } = useTranslations();

  return (
    <section id="how-it-works" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading title={t.howItWorks.title} centered />

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div className="space-y-8">
            {t.howItWorks.steps.map((step) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45 }}
                className="border-b border-navy/5 pb-8 last:border-b-0 last:pb-0"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-primary text-sm font-bold text-white">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-navy md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-warm-grey">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="lg:sticky lg:top-24">
            <SampleMaterialEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}

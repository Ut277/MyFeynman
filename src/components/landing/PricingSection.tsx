"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useLeadCapture } from "@/components/modal/LeadCaptureProvider";
import { useTranslations } from "@/i18n/LocaleProvider";

interface PricingCardProps {
  source?: string;
  showHeading?: boolean;
}

export function PricingCard({
  source = "pricing_section",
  showHeading = true,
}: PricingCardProps) {
  const { openModal } = useLeadCapture();
  const { t } = useTranslations();

  return (
    <div>
      {showHeading && (
        <SectionHeading title={t.pricing.title} centered />
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-md rounded-3xl border border-navy/10 bg-white p-8 shadow-lg shadow-navy/5 md:p-10"
      >
        <div className="text-center">
          <p className="font-display text-5xl font-semibold text-navy">
            ₹3,000
          </p>
          <p className="mt-1 text-sm text-warm-grey">{t.pricing.perMonth}</p>
        </div>

        <ul className="mt-8 space-y-3">
          {t.pricing.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm text-navy"
            >
              <span className="mt-0.5 text-accent-green">✓</span>
              {feature}
            </li>
          ))}
        </ul>

        <Button className="mt-8 w-full" onClick={() => openModal(source)}>
          {t.pricing.cta}
        </Button>

        <p className="mt-4 text-center text-xs text-warm-grey">
          {t.pricing.finePrint}
        </p>
      </motion.div>
    </div>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <PricingCard source="landing_pricing" />
      </div>
    </section>
  );
}

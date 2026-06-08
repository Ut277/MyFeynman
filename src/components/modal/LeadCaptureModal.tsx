"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createLeadFormSchema,
  type LeadFormData,
} from "@/lib/lead-form-schema";
import {
  SUBJECT_KEYS,
  LANGUAGE_KEYS,
  LEAD_WEBHOOK_URL,
} from "@/lib/constants";
import { trackLeadSubmission } from "@/lib/analytics";
import { useLeadCapture } from "./LeadCaptureProvider";
import { Button } from "@/components/ui/Button";
import { useTranslations } from "@/i18n/LocaleProvider";

export function LeadCaptureModal() {
  const { isOpen, closeModal } = useLeadCapture();
  const { t } = useTranslations();
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const schema = useMemo(
    () => createLeadFormSchema(t.modal.errors),
    [t.modal.errors]
  );

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>({
    resolver: zodResolver(schema),
    defaultValues: { subjects: [] },
  });

  const selectedSubjects = watch("subjects") || [];

  const toggleSubject = (subject: string) => {
    const next = selectedSubjects.includes(subject)
      ? selectedSubjects.filter((s) => s !== subject)
      : [...selectedSubjects, subject];
    setValue("subjects", next, { shouldValidate: true });
  };

  const onSubmit = async (data: LeadFormData) => {
    setSubmitError("");
    try {
      if (LEAD_WEBHOOK_URL) {
        const res = await fetch(LEAD_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...data,
            whatsappNumber: `91${data.whatsappNumber}`,
            submittedAt: new Date().toISOString(),
          }),
        });
        if (!res.ok) throw new Error("Submission failed");
      }
      trackLeadSubmission();
      setSubmitted(true);
      reset();
    } catch {
      setSubmitError(t.modal.submitError);
    }
  };

  const handleClose = () => {
    closeModal();
    setTimeout(() => {
      setSubmitted(false);
      setSubmitError("");
      reset();
    }, 300);
  };

  const grades = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy/50 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-x-4 top-[5vh] z-50 mx-auto max-h-[90vh] max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl md:inset-x-auto md:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-modal-title"
          >
            <button
              type="button"
              onClick={handleClose}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-warm-grey hover:bg-orange-light hover:text-navy"
              aria-label="Close"
            >
              ✕
            </button>

            {submitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-green/10 text-3xl">
                  ✓
                </div>
                <h2
                  id="lead-modal-title"
                  className="text-2xl font-semibold text-navy"
                >
                  {t.modal.thankYou}
                </h2>
                <p className="mt-3 leading-relaxed text-warm-grey">
                  {t.modal.thankYouBody}
                </p>
                <Button className="mt-6" onClick={handleClose}>
                  {t.modal.done}
                </Button>
              </div>
            ) : (
              <>
                <h2
                  id="lead-modal-title"
                  className="text-2xl font-semibold text-navy"
                >
                  {t.modal.title}
                </h2>
                <p className="mt-2 text-sm text-warm-grey">{t.modal.subtitle}</p>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-6 space-y-4"
                >
                  <Field label={t.modal.parentName} error={errors.parentName?.message}>
                    <input
                      {...register("parentName")}
                      className={inputClass(errors.parentName)}
                      placeholder={t.modal.parentNamePlaceholder}
                    />
                  </Field>

                  <div className="grid grid-cols-2 gap-4">
                    <Field
                      label={t.modal.childGrade}
                      error={errors.childGrade?.message}
                    >
                      <select
                        {...register("childGrade")}
                        className={inputClass(errors.childGrade)}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          {t.modal.selectGrade}
                        </option>
                        {grades.map((n) => (
                          <option key={n} value={String(n)}>
                            {t.modal.gradeLabels[n - 1]}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field
                      label={t.modal.preferredLanguage}
                      error={errors.preferredLanguage?.message}
                    >
                      <select
                        {...register("preferredLanguage")}
                        className={inputClass(errors.preferredLanguage)}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          {t.modal.selectLanguage}
                        </option>
                        {LANGUAGE_KEYS.map((key, i) => (
                          <option key={key} value={key}>
                            {t.formSubjects.languageNames[i] ?? key}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field
                    label={t.modal.subjects}
                    error={errors.subjects?.message}
                  >
                    <div className="flex flex-wrap gap-2">
                      {SUBJECT_KEYS.map((key, i) => {
                        const selected = selectedSubjects.includes(key);
                        return (
                          <button
                            key={key}
                            type="button"
                            onClick={() => toggleSubject(key)}
                            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                              selected
                                ? "bg-orange-primary text-white"
                                : "bg-orange-light text-navy hover:bg-orange-primary/10"
                            }`}
                          >
                            {t.formSubjects.subjectNames[i] ?? key}
                          </button>
                        );
                      })}
                    </div>
                  </Field>

                  <div className="grid grid-cols-2 gap-4">
                    <Field
                      label={t.modal.whatsappNumber}
                      error={errors.whatsappNumber?.message}
                    >
                      <div className="flex">
                        <span className="inline-flex items-center rounded-l-xl border border-r-0 border-navy/10 bg-orange-light px-3 text-sm text-warm-grey">
                          +91
                        </span>
                        <input
                          {...register("whatsappNumber")}
                          type="tel"
                          className={`${inputClass(errors.whatsappNumber)} rounded-l-none`}
                          placeholder="9876543210"
                          maxLength={10}
                        />
                      </div>
                    </Field>

                    <Field label={t.modal.city} error={errors.city?.message}>
                      <input
                        {...register("city")}
                        className={inputClass(errors.city)}
                        placeholder={t.modal.cityPlaceholder}
                      />
                    </Field>
                  </div>

                  {submitError && (
                    <p className="text-sm text-red-600">{submitError}</p>
                  )}

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t.modal.submitting : t.modal.submit}
                  </Button>

                  <p className="text-center text-xs text-warm-grey">
                    {t.modal.paymentNote}
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-navy">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

function inputClass(error: unknown) {
  return `w-full rounded-xl border px-4 py-2.5 text-sm text-navy outline-none transition-colors focus:border-orange-primary focus:ring-2 focus:ring-orange-primary/20 ${
    error ? "border-red-300" : "border-navy/10"
  }`;
}

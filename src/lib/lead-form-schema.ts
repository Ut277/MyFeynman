import { z } from "zod";

export function createLeadFormSchema(errors: {
  parentName: string;
  childGrade: string;
  subjects: string;
  preferredLanguage: string;
  whatsappNumber: string;
  city: string;
}) {
  return z.object({
    parentName: z.string().min(2, errors.parentName),
    childGrade: z.string().min(1, errors.childGrade),
    subjects: z.array(z.string()).min(1, errors.subjects),
    preferredLanguage: z.string().min(1, errors.preferredLanguage),
    whatsappNumber: z
      .string()
      .min(10, errors.whatsappNumber)
      .regex(/^[6-9]\d{9}$/, errors.whatsappNumber),
    city: z.string().min(2, errors.city),
  });
}

export type LeadFormData = z.infer<
  ReturnType<typeof createLeadFormSchema>
>;

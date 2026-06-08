export const WHATSAPP_NUMBER = "919068533260";
export const WHATSAPP_NUMBER_DISPLAY = "+91 90685 33260";
export const WHATSAPP_MESSAGE =
  "Hi, I'd like to book a free demo class for my child";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const LEAD_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL || "";

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

/** Stored as form values; labels come from i18n dictionaries */
export const SUBJECT_KEYS = [
  "Mathematics",
  "Science",
  "English",
  "Social Studies",
  "Hindi",
  "Physics",
  "Chemistry",
  "Biology",
  "History",
  "Geography",
] as const;

export const LANGUAGE_KEYS = [
  "Hindi",
  "Tamil",
  "Telugu",
  "Kannada",
  "Marathi",
  "Gujarati",
  "Bengali",
  "Odia",
  "Malayalam",
  "Punjabi",
  "Rajasthani",
  "Bhojpuri",
  "Assamese",
  "English",
] as const;

export const locales = ["en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function getMessages(locale: Locale) {
  // Dynamic import for message files
  switch (locale) {
    case "en":
      return import("./messages/en.json");
    default:
      return import("./messages/en.json");
  }
}

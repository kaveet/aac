import { getRequestConfig } from "next-intl/server";
import { defaultLocale, getMessages } from "./index";

export default getRequestConfig(async () => {
  const locale = defaultLocale;
  const messages = await getMessages(locale);

  return {
    locale,
    messages: messages.default,
  };
});

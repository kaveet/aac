import pino from "pino";

const isDev = process.env.NODE_ENV !== "production";

export function createLogger(name: string) {
  return pino({
    name,
    level: process.env.LOG_LEVEL ?? (isDev ? "debug" : "info"),
    ...(isDev && {
      transport: {
        target: "pino-pretty",
        options: {
          colorize: true,
        },
      },
    }),
  });
}

export const logger = createLogger("app");

export type Logger = ReturnType<typeof createLogger>;

export const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN ?? undefined;
export const environment = process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT ?? process.env.NODE_ENV;
export const release = process.env.NEXT_PUBLIC_SENTRY_RELEASE ?? process.env.SENTRY_RELEASE;
export const sampleRate = process.env.NEXT_PUBLIC_SENTRY_SAMPLE_RATE
    ? Number(process.env.NEXT_PUBLIC_SENTRY_SAMPLE_RATE)
    : 1.0;
export const tracesSampleRate = process.env.NEXT_PUBLIC_SENTRY_TRACES_SAMPLE_RATE
    ? Number(process.env.NEXT_PUBLIC_SENTRY_TRACES_SAMPLE_RATE)
    : 1.0;
export const ignoreErrors: (string | RegExp)[] = [];
export const ignoreTransactions: (string | RegExp)[] = [
    "/monitoring",
];
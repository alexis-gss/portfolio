// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import {
    dsn,
    environment,
    release,
    sampleRate,
    tracesSampleRate,
    ignoreErrors,
    ignoreTransactions,
} from "./sentry.shared.config";

Sentry.init({
  dsn,
  environment,
  release,
  integrations: [Sentry.replayIntegration()],
  sampleRate,
  tracesSampleRate,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  ignoreErrors,
  ignoreTransactions,
  dataCollection: {},
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
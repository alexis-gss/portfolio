// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
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
    sampleRate,
    tracesSampleRate,
    ignoreErrors,
    ignoreTransactions,
    strictTraceContinuation: process.env.SENTRY_STRICT_TRACE_CONTINUATION === "true",
    orgId: process.env.SENTRY_ORG_ID ? Number(process.env.SENTRY_ORG_ID) : undefined,
    dataCollection: {},
});
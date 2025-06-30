import React from 'react'
import  ReactDOM  from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://a219c1f8155de3309c43add5d3651d4b@o4509574448218112.ingest.us.sentry.io/4509574457982976",
  integrations: [
    Sentry.browserTracingIntegration(),
      Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),

    Sentry.replayIntegration({
      // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
      maskAllText: false, // Masks all text in the replay
      blockAllMedia: false, // Blocks all media in the replay
    })
  ],
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
   // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
      maskAllText: false, // Masks all text in the replay
      blockAllMedia: false, // Blocks all media in the replay
      tracesSampleRate: 1.0,
  sendDefaultPii: true
 
});

// Create the root element and render the App component

ReactDOM.createRoot(document.getElementById('root')).
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

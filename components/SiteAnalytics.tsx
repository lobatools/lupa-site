'use client'

import { Analytics, type BeforeSendEvent } from '@vercel/analytics/next'

const OPT_OUT_KEY = 'va-disable'

/**
 * Vercel Web Analytics with a per-browser opt-out, so your own visits aren't counted.
 * Visit any page with ?notrack to stop tracking this browser, or ?track to resume.
 */
function beforeSend(event: BeforeSendEvent) {
  try {
    const params = new URL(event.url).searchParams
    if (params.has('notrack')) localStorage.setItem(OPT_OUT_KEY, '1')
    if (params.has('track')) localStorage.removeItem(OPT_OUT_KEY)
    if (localStorage.getItem(OPT_OUT_KEY)) return null
  } catch {
    // Storage blocked (private mode, etc.): fall through and record normally.
  }
  return event
}

export function SiteAnalytics() {
  return <Analytics beforeSend={beforeSend} />
}

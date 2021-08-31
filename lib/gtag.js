export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// Record the gtag event when someone clicks on the chosen link or button.
export const gtagFormConversion = () => {
  const url = 'https://form.jotformz.com/92974452958677'
  const callback = function () {
    if (typeof url != 'undefined') {
      window.open(url, '_blank')
    }
  }

  gtag('event', 'conversion', {
    send_to: 'AW-840306545/jF4gCLidy7UBEPGe2JAD',
    event_callback: callback,
  })
  return false
}

import { isProd, params } from '@params'

const { googletagid, jotformurl } = params

/** Record the gtag event when someone clicks on the chosen link or button. */
const gtagFormConversion = () => {
  const openUrl = () =>
    typeof jotformurl !== 'undefined' && window.open(jotformurl, '_blank')

  isProd
    ? window.gtag('event', 'conversion', {
        send_to: googletagid,
        event_callback: openUrl,
      })
    : openUrl()
  return false
}

const orcamentoElements = document.querySelectorAll('[data-js-gtag-orcamento]')
orcamentoElements.forEach((element) => {
  element.addEventListener('click', () => gtagFormConversion())
})

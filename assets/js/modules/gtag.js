// Record the gtag event when someone clicks on the chosen link or button.
const orcamentoElements = document.querySelectorAll('.gtag-orcamento')
orcamentoElements.forEach((element) => {
  element.addEventListener('click', () => {
    const url = 'https://form.jotformz.com/92974452958677'
    const callback = () => {
      if (typeof url !== 'undefined') window.open(url, '_blank')
    }

    window.gtag('event', 'conversion', {
      send_to: 'AW-840306545/jF4gCLidy7UBEPGe2JAD',
      event_callback: callback,
    })
    return false
  })
})

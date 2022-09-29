const orcamentoElements = document.querySelectorAll('.tagOrcamento')
orcamentoElements.forEach((element) => {
  element.addEventListener('click', (evt) =>
    console.log(`${JSON.stringify(evt)} clicked`)
  )
})

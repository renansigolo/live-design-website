/** Show or Hide the button when scroll after portfolio */
const btnFixed = document.querySelector('#btn-fixed')
const portfolio = document.querySelector('#portfolio')

const toggleVisibility = () => {
  document.addEventListener('scroll', () => {
    btnFixed.style.transform =
      window.pageYOffset >= portfolio.offsetTop ? 'scale(1)' : 'scale(0)'
  })
}
toggleVisibility()

// Show or Hide the button when scroll after portfolio
const btnFixed = document.querySelector('#btn-fixed')
const portfolio = document.querySelector('#portfolio')

document.addEventListener('scroll', () => {
  btnFixed.style.transform =
    window.pageYOffset >= portfolio.offsetTop ? 'scale(1)' : 'scale(0)'
})

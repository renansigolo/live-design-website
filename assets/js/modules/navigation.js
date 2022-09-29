// Toogle Mobile Menu Background
let activeSidebar = true

const mobileMenu = document.querySelector('#mobile-menu')
const mobileMenuBackground = document.querySelector('#mobile-menu-background')
const mobileMenuItems = document.querySelectorAll('#mobile-menu li')

const toggleSidebar = () => {
  if (activeSidebar) {
    document.body.style.overflow = 'hidden'
    mobileMenu.classList.add('nav-active')
    mobileMenuBackground.classList.add('overflow-active')
  } else {
    document.body.style.overflow = ''
    mobileMenu.classList.remove('nav-active')
    mobileMenuBackground.classList.remove('overflow-active')
  }
  activeSidebar = !activeSidebar
}
mobileMenuBackground.addEventListener('click', toggleSidebar)
mobileMenuItems.forEach((item) => {
  item.addEventListener('click', toggleSidebar)
})
document
  .querySelector('[data-target="mobile-menu"]')
  .addEventListener('click', () => toggleSidebar())

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

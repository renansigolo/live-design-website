// Toogle Mobile Menu Background
let activeSidebar = true

const mobileMenu = document.querySelector('#mobile-menu')
const mobileMenuBackground = document.querySelector('#mobile-menu-background')
const mobileMenuButton = document.querySelector('[data-target="mobile-menu"]')
const mobileMenuItems = document.querySelectorAll('#mobile-menu li')

/** Toggle Mobile Menu Visibility */
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

mobileMenuButton.addEventListener('click', () => toggleSidebar())
mobileMenuBackground.addEventListener('click', toggleSidebar)
mobileMenuItems.forEach((item) => {
  item.addEventListener('click', toggleSidebar)
})

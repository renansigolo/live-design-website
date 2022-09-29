// import M from '@materializecss/materialize'
import './modules/gtag'
import './modules/home'
import './modules/navigation'
import './modules/orcamento'
import './modules/portfolio'
// import * as materialLibrary from './node_modules/@materializecss/materialize/dist/js/materialize.min.js'

document.addEventListener('DOMContentLoaded', () => {
  // console.log(materialLibrary.default)
  // materialLibrary.default.init()
  // materialLibrary.init()
})

// /** Scroll to the About Section */
// const scrollToAboutSection = () => {
//   location.href = '#about'
// }

// document.addEventListener('DOMContentLoaded', () => {
//   // Init Sidebar
// const allSidenav = document.querySelectorAll('.sidenav')
// M.Sidenav.init(allSidenav)

//   // Close Sidebar on mobile after click
//   const mobileMenu = document.querySelector('#mobile-menu')
//   const sideNav = M.Sidenav.getInstance(mobileMenu)
//   const mobileMenuItems = document.querySelectorAll('#mobile-menu li a')

//   mobileMenuItems.forEach((menuItem) => {
//     menuItem.addEventListener('click', () => {
//       sideNav.close()
//     })
//   })

// // Init Modal
// const modalsSelected = document.querySelectorAll('.modal')
// M.Modal.init(modalsSelected)

// // Show or Hide the button when scroll after portfolio
// const btnFixed = document.querySelector('#btn-fixed')
// const portfolio = document.querySelector('#portfolio')

// document.addEventListener('scroll', () => {
//   btnFixed.style.transform =
//     window.pageYOffset >= portfolio.offsetTop ? 'scale(1)' : 'scale(0)'
// })
// })

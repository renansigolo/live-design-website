/** Scroll to the About Section */
const scrollToAboutSection = () => {
  location.href = "#about"
}

document.addEventListener("DOMContentLoaded", function () {
  // Init Sidebar
  const allSidenav = document.querySelectorAll(".sidenav")
  M.Sidenav.init(allSidenav)

  const carousel = document.querySelectorAll(".carousel")
  const carouselOptions = {
    fullWidth: false,
    indicators: true,
  }
  M.Carousel.init(carousel, carouselOptions)

  // Close Sidebar on mobile after click
  let mobileMenu = document.querySelector("#mobile-menu")
  let sideNav = M.Sidenav.getInstance(mobileMenu)
  let mobileMenuItems = document.querySelectorAll("#mobile-menu li a")

  mobileMenuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
      sideNav.close()
    })
  })

  // Init Modal
  const modalsSelected = document.querySelectorAll(".modal")
  M.Modal.init(modalsSelected)

  // Show or Hide the button when scroll after portfolio
  let btnFixed = document.querySelector("#btn-fixed")
  let portfolio = document.querySelector("#portfolio")

  document.addEventListener("scroll", () => {
    btnFixed.style.transform =
      window.pageYOffset >= portfolio.offsetTop ? "scale(1)" : "scale(0)"
  })
})

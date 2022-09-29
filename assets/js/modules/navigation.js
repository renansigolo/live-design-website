// Sidebar
let activeSidebar = false
const toggleOpen = () => {
  !activeSidebar
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = '')
  activeSidebar = !activeSidebar
}
document
  .querySelector('[data-target="mobile-menu"]')
  .addEventListener('click', () => {
    console.log('mobile-menu clicked', activeSidebar)
    toggleOpen()
  })

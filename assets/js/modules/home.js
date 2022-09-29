// Attach event listeners
document
  .querySelector('#learn-more .arrow-down')
  .addEventListener('click', () => scrollToSection('#about'))

/**
 * Scroll to a section
 * @param {string} sectionId
 * @returns
 */
const scrollToSection = (sectionId) => (location.href = sectionId)

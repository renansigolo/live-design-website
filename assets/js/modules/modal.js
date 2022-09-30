document.addEventListener('DOMContentLoaded', () => {
  const modalTriggers = document.querySelectorAll('.modal-trigger')
  const container = document.querySelector('.modal-container')

  modalTriggers.forEach((el) => {
    el.addEventListener('click', (ref) => {
      const modalId = ref.target.dataset.modal
      document.querySelector(`#${modalId}`).style.display = 'flex'
      container.style.display = 'flex'
      document.body.style.overflow = 'hidden'
    })
  })

  container.addEventListener('click', (ref) => {
    if (ref.target === container) {
      container.style.display = 'none'
      document.body.style.overflow = ''
    }
  })
})

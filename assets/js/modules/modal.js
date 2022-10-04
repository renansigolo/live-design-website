let modalId
let modalElement

const modalTriggers = document.querySelectorAll('.modal-trigger')
const modalContainer = document.querySelector('.modal-container')

document.addEventListener('DOMContentLoaded', () => {
  modalTriggers.forEach((el) => {
    el.addEventListener('click', (ref) => {
      modalId = ref.target.dataset.modal
      modalElement = document.querySelector(`#${modalId}`)

      modalElement.style.display = 'flex'
      modalContainer.style.display = 'flex'
      document.body.style.overflow = 'hidden'
    })
  })

  modalContainer.addEventListener('click', (ref) => {
    if (ref.target === modalContainer) {
      modalContainer.style.display = 'none'
      document.body.style.overflow = ''
    }
    modalElement.style.display = 'none'
  })
})

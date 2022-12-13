const modalTriggers = document.querySelectorAll('.modal-trigger')
const allDialogs = document.querySelectorAll('dialog')
const allDialogLinks = document.querySelectorAll('.dialog-footer a')

document.addEventListener('DOMContentLoaded', () => {
  modalTriggers.forEach((el) => {
    el.addEventListener('click', (evt) => {
      const modalId = evt.target.dataset.modal
      const modalElement = document.querySelector(`#${modalId}`)

      modalElement.showModal()
      document.body.style.overflow = 'hidden'
    })
  })

  allDialogs.forEach((dialog) => {
    dialog.addEventListener('click', (evt) => {
      if (evt.target === dialog) {
        dialog.close()
        document.body.style.overflow = ''
      }
    })
  })

  allDialogLinks.forEach((el) => {
    el.addEventListener('click', (evt) => {
      window.open(evt.target.dataset.dialogUrl, '_blank')
    })
  })
})

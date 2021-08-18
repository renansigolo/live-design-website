import { useEffect } from 'react'

export default function ButtonToTop() {
  useEffect(() => {
    /** Show or Hide the button when scroll after portfolio */
    const toggleVisibility = () => {
      const btnFixed = document.querySelector('#btn-fixed')
      const portfolio = document.querySelector('#portfolio')

      document.addEventListener('scroll', () => {
        btnFixed.style.transform =
          window.pageYOffset >= portfolio.offsetTop ? 'scale(1)' : 'scale(0)'
      })
    }
    toggleVisibility()
  }, [])

  return (
    <div className="fixed-action-btn" id="btn-fixed">
      <a className="btn-floating btn-large waves-effect waves-light" href="#">
        <i className="large material-icons">arrow_upward</i>
      </a>
    </div>
  )
}

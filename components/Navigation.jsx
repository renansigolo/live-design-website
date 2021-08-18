import { useState } from 'react'
import { gtagFormConversion } from '../lib/gtag'

const navItems = [
  {
    url: '#main-section',
    title: 'Home',
  },
  {
    url: '#about',
    title: 'Sobre',
  },
  {
    url: '#portfolio',
    title: 'Portfólio',
  },
]

const NavigationItems = () => {
  return (
    <>
      {navItems.map(({ title, url }) => (
        <li key={title}>
          <a href={url}>{title}</a>
        </li>
      ))}
      <li>
        <a
          onClick={() => {
            gtagFormConversion()
          }}
          rel="noopener noreferrer"
        >
          Orçamento
        </a>
      </li>
    </>
  )
}

const SocialMediaLinks = () => {
  return (
    <>
      <a
        href="https://instagram.com/live.dsgn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="images/social-media/instagram.svg"
          height="20px"
          alt="Social Media Icon"
        />
      </a>
      <a
        href="https://facebook.com/livedsgn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="images/social-media/facebook.svg"
          height="20px"
          alt="Social Media Icon"
        />
      </a>
      <a
        href="https://behance.net/joaojoaotx"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="images/social-media/behance.svg"
          height="17px"
          alt="Social Media Icon"
        />
      </a>
    </>
  )
}

const DesktopNav = () => {
  return (
    <ul className="right hide-on-med-and-down">
      <NavigationItems />

      <ul className="social-icons">
        <SocialMediaLinks />
      </ul>
    </ul>
  )
}

const MobileNav = (props) => {
  const { activeSidebar, toggleSidebar } = props

  return (
    <>
      <div
        className={activeSidebar ? 'overflow-active' : ''}
        onClick={props.toggleSidebar}
      ></div>
      <ul
        className={`sidenav ${activeSidebar ? 'nav-active' : ''}`}
        id="mobile-menu"
      >
        {navItems.map(({ title, url }) => (
          <li
            key={title}
            onClick={() => {
              toggleSidebar(false)
            }}
          >
            <a href={url}>{title}</a>
          </li>
        ))}
        <li>
          <a
            onClick={() => {
              gtagFormConversion()
            }}
            rel="noopener noreferrer"
          >
            Orçamento
          </a>
        </li>

        <ul className="social-icons valign-wrapper">
          <SocialMediaLinks />
        </ul>
      </ul>
    </>
  )
}

export default function Navigation() {
  const [activeSidebar, setActiveSidebar] = useState(false)

  const toggleOpen = () => {
    !activeSidebar
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = '')
    setActiveSidebar(!activeSidebar)
  }

  return (
    <header className="container" id="header">
      <div className="valign-wrapper">
        <nav className="navbar">
          <div className="nav-wrapper">
            <div className="navbar-logo">
              <img
                src="images/icon-live-design.svg"
                height="25px"
                alt="Live Design Icon"
              />
              <strong className="navbar-logo__label black-text">
                Traga vida à sua ideia!
              </strong>
            </div>

            <a
              href="#"
              data-target="mobile-menu"
              className="sidenav-trigger hide-on-large-only black-text"
              onClick={() => {
                toggleOpen(activeSidebar)
              }}
            >
              <i className="material-icons">menu</i>
            </a>

            <DesktopNav />
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <MobileNav activeSidebar={activeSidebar} toggleSidebar={toggleOpen} />
    </header>
  )
}

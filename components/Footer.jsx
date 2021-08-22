import Image from 'next/image'
import { gtagFormConversion } from '../lib/gtag'
import LogoLiveDesignWhite from '/public/images/logo-live-design-white.svg'
import IconLiveDesignWhite from '/public/images/icon-live-design-white.svg'
import IconBehance from '/public/images/social-media/behance-wht.svg'
import IconFacebook from '/public/images/social-media/facebook-wht.svg'
import IconInstagram from '/public/images/social-media/instagram-wht.svg'

export default function Footer() {
  return (
    <footer id="footer">
      <div className="center-align">
        <div className="footer">
          <Image src={IconLiveDesignWhite} height={90} alt="Live Design Logo" />
          <div className="footer__content">
            <h2>Traga vida à sua ideia!</h2>
            <a
              onClick={() => {
                gtagFormConversion()
              }}
              className="btn btn-large btn-orcamento waves-effect white black-text"
              rel="noopener noreferrer"
            >
              Solicite um Orçamento
            </a>
            <a
              href="https://behance.net/joaojoaotx"
              target="_blank"
              className="white-text"
              rel="noopener noreferrer"
            >
              Ver Portfólio Completo
            </a>
            <ul className="row-social-icons">
              <li>
                <a
                  href="https://instagram.com/live.dsgn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={IconInstagram} alt="Instagram Icon" height={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/livedsgn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={IconFacebook} alt="Facebook Icon" height={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://behance.net/joaojoaotx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={IconBehance} alt="Behance Icon" height={19} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright hide-on-med-and-down">
          <div className="container">
            <Image
              src={LogoLiveDesignWhite}
              height={25}
              alt="Live Design Logo"
            />

            <ul className="copyright__links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#portfolio">Portfólio</a>
              </li>
              <li>
                <a
                  onClick={() => {
                    gtagFormConversion()
                  }}
                >
                  Orçamento
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
import { gtagFormConversion } from '../lib/gtag'

export default function Footer() {
  return (
    <footer id="footer">
      <div className="center-align">
        <div className="footer">
          <img
            src="images/icon-live-design-white.svg"
            height="90px"
            alt="Live Design Logo"
          />
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
                  <img
                    src="images/social-media/instagram-wht.svg"
                    alt="Social Media Icon"
                    height="20px"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/livedsgn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/social-media/facebook-wht.svg"
                    alt="Social Media Icon"
                    height="20px"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://behance.net/joaojoaotx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/social-media/behance-wht.svg"
                    alt="Social Media Icon"
                    height="19px"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright hide-on-med-and-down">
          <div className="container">
            <img
              src="images/logo-live-design-white.svg"
              height="25px"
              alt="Live Design Logo"
            />

            <ul className="footer-copyright__links">
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
                  rel="noopener noreferrer"
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

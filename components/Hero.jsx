import { gtagFormConversion } from '../lib/gtag'

export default function Hero() {
  /** Scroll to the About Section */
  const scrollToAboutSection = () => {
    location.href = '#about'
  }

  return (
    <div className="bg-hero">
      <section id="hero" className="hero">
        <div className="container">
          <div className="row">
            <div className="col s12 l6">
              <div className="hero__content">
                <h1 className="title">
                  Somos um estúdio de design especializado
                  em&nbsp;projetos&nbsp;de <b>Identidade&nbsp;Visual.</b>
                  <img
                    src="images/icon-live-design-white.svg"
                    height="40px"
                    width="58px"
                    alt="Live Design Logo"
                  />
                </h1>
                <a
                  onClick={() => {
                    gtagFormConversion()
                  }}
                  className="btn btn-large btn-orcamento waves-effect white mt-8"
                  rel="noopener noreferrer"
                >
                  Solicite um Orçamento
                </a>
              </div>
            </div>
            <div className="col s12 l6 hide-on-med-and-down">
              <img
                className="hero-img"
                loading="eager"
                src="images/banner-hero.svg"
                alt="Banner Hero"
              />
            </div>
          </div>
        </div>
        <div
          id="learn-more"
          onClick={() => {
            location.href = '#about'
          }}
        >
          <div className="arrow-down">
            <span>Saiba mais</span>
            <img
              src="images/icon-arrow-upward.svg"
              height="40px"
              alt="Arrow Down"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

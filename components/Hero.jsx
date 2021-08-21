import Image from 'next/image'
import { gtagFormConversion } from '../lib/gtag'
import BannerHero from '/public/images/banner-hero.svg'

export default function Hero() {
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
                  <Image
                    src="/images/icon-live-design-white.svg"
                    height={40}
                    width={58}
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
              <Image
                className="hero-img"
                src={BannerHero}
                alt="Banner Hero"
                loading="eager"
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
            <Image
              src="/images/icon-arrow-upward.svg"
              height={40}
              width={40}
              alt="Arrow Down"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

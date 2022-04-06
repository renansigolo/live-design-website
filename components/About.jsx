import Image from 'next/image'
import BannerAbout from '/public/images/banner-about.svg'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="col s12 l6 hide-on-small-and-down">
            <Image
              className="responsive-img"
              src={BannerAbout}
              alt="Banner About"
            />
          </div>
          <div className="col s12 l6 about__content">
            <span>Sobre nós</span>
            <h2>
              A&nbsp;Live&nbsp;Design&nbsp;cria&nbsp;projetos&nbsp;de
              identidade&nbsp;visual&nbsp;com
              o&nbsp;objetivo&nbsp;de&nbsp;agregar&nbsp;valor
              à&nbsp;marca&nbsp;e&nbsp;se&nbsp;conectar
              ao&nbsp;seu&nbsp;público&nbsp;alvo.
            </h2>
            <p>
              Todo&nbsp;o&nbsp;projeto&nbsp;é&nbsp;baseado&nbsp;em&nbsp;pesquisas&nbsp;e&nbsp;feito
              estratégicamente&nbsp;para&nbsp;transmitir&nbsp;a&nbsp;essência
              da&nbsp;sua&nbsp;marca&nbsp;ao&nbsp;seu&nbsp;público&nbsp;alvo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="col s12 l6 hide-on-small-and-down">
            <img
              className="responsive-img"
              src="images/banner-about.svg"
              alt="Banner About"
            />
          </div>
          <div className="col s12 l6 about__content">
            <span>Sobre nós</span>
            <h2>
              A Live Design cria projetos de
              <br />
              identidade visual com o objetivo
              <br />
              de agregar valor à marca e se
              <br />
              conectar ao seu público alvo.
            </h2>
            <p>
              Todo o projeto é baseado em pesquisas e feito
              <br />
              estratégicamente para transmitir a essência
              <br />
              da sua marca ao seu público alvo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

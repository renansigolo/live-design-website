export default function Profile() {
  return (
    <section id="profile" className="profile">
      <div className="container">
        <div className="row">
          <div className="col s12 l7 profile__content">
            <h2>Quem trará vida à sua ideia?</h2>
            <p>
              Me chamo João Teixeira, sou formado em Publicidade pela
              Universidade Anhembi Morumbi e tenho mais de 5 anos de experiência
              na área de criação e design. Me especializei na criação de
              projetos de marca, abri meu próprio estúdio de design e comecei a
              dar vida às ideias de profissionais e empresas dos mais diversos
              segmentos.
            </p>
          </div>
          <div className="col s12 l5 profile__image">
            <a
              href="https://www.behance.net/joaojoaotx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="circle responsive-img"
                loading="eager"
                src="images/avatar/joao.jpg"
                alt="Banner About"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

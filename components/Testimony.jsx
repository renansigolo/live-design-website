export default function Testimony() {
  const testimonydata = [
    {
      id: 'renan',
      fullName: 'Renan Sigolo',
      company: 'My ADHD',
      description:
        'Um trabalho incrível com criatividade, inovação e profissionalismo. Amei as artes criadas pela Live Design incorporando a identidade visual que minha marca estava precisando!',
    },
    {
      id: 'renata',
      fullName: 'Renata Cunha',
      company: 'Paçocão',
      description:
        'Quero agradecer mais uma vez o desenvolvimento da Identidade Visual da Paçocão. O João pensou em todos os detalhes, além da paciência e ótimas ideias quando solicitavamos algumas alterações. Ficou tudo muito lindo. Adoramos!',
    },
    {
      id: 'agk',
      fullName: 'Juliana Leite',
      company: 'AGK Corretora de Câmbio S.A.',
      description:
        'A Live Design tornou-se nossa parceira no ano de 2020 em meio à tantas mudanças e foi essencial para o processo de modernização que hoje, se tornou possível graças à parceiros como o João. Um trabalho executado com excelência, rapidez, tecnologia e trazendo conceitos inovadores de Design, fazendo com que nossa marca seja cada vez mais bem vista no mercado.',
    },
    {
      id: 'pedro',
      fullName: 'Pedro Boralli',
      company: 'Robinpack',
      description:
        'Estamos muito satisfeitos com todo o trabalho que foi feito junto à Robin desde o começo, a atenção dedicada e o tempo para sanar todas as nossas dúvidas e demandas. Temos que valorizar esse tipo de trabalho, super profissional e transparente.',
    },
  ]

  return (
    <section id="testimony" className="testimony grey lighten-5">
      <div className="container">
        <div className="row">
          <h2>Depoimentos</h2>
          <p className="testimony__subtitle">
            O que os clientes estão dizendo sobre a Live Design.
          </p>
        </div>
        <div className="row">
          {testimonydata.map(({ id, fullName, company, description }) => (
            <div className="col s12 m6" key={id}>
              <img
                className="circle responsive-img hide-on-small-only"
                loading="lazy"
                src={`images/avatar/${id}.jpg`}
                alt={`${fullName} Profile Picture`}
              />

              <p>&quot;{description}&quot;</p>

              <div className="testimony__footer">
                <img
                  className="circle hide-on-med-and-up"
                  loading="lazy"
                  src={`images/avatar/${id}.jpg`}
                  alt={`${fullName} Profile Picture`}
                />
                <p>
                  {fullName}
                  <br />
                  <span>{company}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

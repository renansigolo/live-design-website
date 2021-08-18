export default function Stages() {
  return (
    <div id="stages" className="stages grey lighten-5">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h2 className="stages__title">Estágios do Projeto</h2>
          </div>
        </div>

        <div className="row stages__content">
          <div className="col s12 l4">
            <h2>1. Briefing</h2>
            <p>
              Nessa etapa eu recolho informações sobre a empresa, tendo como
              foco 3 pontos principais:
            </p>
            <ul>
              <li>quem essa marca é;</li>
              <li>para quem está sendo feita;</li>
              <li>onde será vista.</li>
            </ul>
          </div>
          <div className="col s12 l4">
            <h2>2. Criação</h2>
            <p>
              Aqui é onde a mágica acontece. É a etapa onde eu vou transformar
              informações em elementos visuais. Vou criar rascunhos, escolher a
              tipografia ideal, as cores, elementos gráficos e fazer inúmeros
              testes com aplicações.
            </p>
          </div>
          <div className="col s12 l4">
            <h2>3. Apresentação</h2>
            <p>
              Eu criarei uma apresentação em PDF para que todos os detalhes do
              projeto sejam esclarecidos e explicados para que o cliente possa
              ver e aprovar.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

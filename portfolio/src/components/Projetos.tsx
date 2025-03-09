import dente from '../assets/dente.png'; 
import webFast from '../assets/webFast.png'; 
import aposenta from '../assets/aposentadoria.png'; 

const Projetos = () => {
    return(
        <div>
            <section className='parent'>
            <section>
                <div className="nes-container with-title is-centered">
                <p className="title">Projetos</p>
                    <section className="Projetos">
                        


                    <div className="card__projetos">
  <div className="card__projetos__image">
 <img src={webFast} alt="" />
  </div>
  <div className="card__projetos__content">
    <h1 >
      <span className="card__projetos__title">
        WebFast
      </span>
    </h1>

    <p className="card__projetos__desc">
    O Web Fast é um projeto que desenvolvo com muito amor e dedicação, utilizando HTML e CSS. No futuro, pretendo expandi-lo com React, Node.js e MySQL. Esse projeto representa a realização de um grande sonho para mim.
    </p>

    <a className="card__projetos__action" href="#">
      Clique aqui
      <span aria-hidden="true">
        →
      </span>
    </a>
  </div>
</div>



<div className="card__projetos">
  <div className="card__projetos__image">
    <img src={dente} alt="" />
  </div>
  <div className="card__projetos__content">
    <h1>
      <span className="card__projetos__title">
      Clínica
      </span>
    </h1>

    <p className="card__projetos__desc">
    Este projeto front-end, desenvolvido durante um curso com autorização, é baseado no site de uma clínica de dentista. O objetivo foi modernizar a interface, proporcionando uma navegação intuitiva e agradavel para todos os usuarios
    </p>

    <a className="card__projetos__action" href="#">
      Clique aqui
      <span aria-hidden="true">
        →
      </span>
    </a>
  </div>
</div>



<div className="card__projetos">
  <div className="card__projetos__image">
    <img src={aposenta} alt="" />
  </div>
  <div className="card__projetos__content">
    <h1>
      <span className="card__projetos__title">
      Simula Aposentadoria
      </span>
    </h1>

    <p className="card__projetos__desc">
    Este é um projeto de simulação de aposentadoria que calcula e armazena os dados no MongoDB via nuvem, utilizando uma API desenvolvida por mim durante um trabalho de faculdade . O sistema foi criado com Express.js, Node.js, HTML e CSS.
    </p>

    <a className="card__projetos__action" href="#">
      Clique aqui
      <span aria-hidden="true">
        →
      </span>
    </a>
  </div>
</div>









                          
                    </section>
                </div>
            
                
            </section>
            </section>
        </div>
    )
}

export default Projetos;

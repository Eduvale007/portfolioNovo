import 'nes.css/css/nes.min.css';
import meImage from '../assets/me.jpeg'; 

const AboutBallon = () =>{
    return (
        <>

<section className='parent'>
<section className="nes-container is-dark">
  <section className="message-list">
      <section className="message">
        
        <img src={meImage} alt="" className='me'/>
        <div className='Profile'>
          <h1>Edu</h1>
          <p>Dev Front-end</p>
        </div>
      </section>

      <section className='text'>
        <h1>sobre</h1>
      <p className="nes-balloon from-left nes-pointer">
      Olá me chamo Eduardo sou um entusiasta da Tecnologia da Informação e, ao longo da minha jornada, passei por diversas tecnologias, como Java, Git, MySQL, MongoDB, Python, CSS, HTML, entre outras. Posso afirmar que essa evolução foi incrível, pois pude aplicar meu aprendizado em diversos projetos práticos. Agora, estou explorando novas possibilidades, com o React que estou usando  neste portólio.
</p>
      </section>



      
  </section>
</section>



      </section>
  

  

        </>
    )
}

export default AboutBallon
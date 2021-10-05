import { Link } from 'react-router-dom'

import bananas from '../assets/img/bananas.jpg'
import camarones from '../assets/img/camarones.jpg'

import symborg from '../assets/img/symborg.svg'
import catawba from '../assets/img/catawba.svg'
import acp from '../assets/img/acp.svg'
import fcnecsa from '../assets/img/fcnecsa.svg'

import campo from '../assets/img/campo.jpg'


const Home = () => {
  return <>
    <div id="carouselExampleInterval" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <img src={bananas} className="d-block w-100" alt="Bananas" />
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src={camarones} className="d-block w-100" alt="Camarones" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <section className="row" id="row-correction">
      <section className="col-12 col-lg-6 home-31">
        <h2>Revolucionamos la manera en la que desarrollas tus cultivos con resultados medibles</h2>
        <p>Con la asesoría de nuestros expertos en campo, garantizamos resultados medibles y crecimiento de producción a mediano y largo plazo en todas las áreas de producción agrícola en Ecuador.</p>
          <Link to="/productos"><button>Productos</button></Link>
      </section>
      <section className="col-12 col-lg-6 campo">
        <img src={campo} alt="Campo" />
      </section>
    </section>
    <section className="home-4">
      <h2>Representamos a los productos más innovadores del mercado</h2>
      <section className="row" id="row-correction">
        <div className="col-sm-2 col-lg-4" />
        <img src={symborg} className="col-sm-4 col-lg-1" alt="Symborg" />
        <img src={catawba} className="col-sm-4 col-lg-1" alt="Catawba" />
        <div className="col-sm-2 lg-hidden" />
        <div className="col-sm-2 lg-hidden" />
        <img src={acp} className="col-sm-4 col-lg-1" alt="acp" />
        <img src={fcnecsa} className="col-sm-4 col-lg-1" alt="fcnecsa" />
        <div className="col-sm-2 col-lg-4" />
      </section>
    </section>
  </>
}

export default Home

import { Link } from 'react-router-dom'

import bananas from '../assets/img/bananas.jpg';

import symborg from '../assets/img/symborg.png';
import catawba from '../assets/img/catawba.png';
import acp from '../assets/img/acp.png';
import fcnecsa from '../assets/img/fcnecsa.png';

const Home = () => {
  return <>
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="5000">
          <img src={bananas} class="d-block w-100" alt="Bananas" />
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img src={bananas} class="d-block w-100" alt="Bananas" />
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img src={bananas} class="d-block w-100" alt="Bananas" />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <section className="row" id="row-correction">
      <section className="col-6 home-31">
        <h2 className="">Revolucionamos la manera en la que desarrolla tus cultivos con resultados medibles</h2>
        <p>Con la asesoría de nuestros expertos en campo, garantizamos resultados medibles y crecimiento de producción a mediano y largo plazo en todas las áreas de producción agrícola en Ecuador.</p>
          <Link to="/productos"><button>Productos</button></Link>
      </section>
      <section className="col-6"></section>
    </section>
    <section className="home-4">
      <h2>Representamos a los productos más innovadores del mercado</h2>
      <section>
        <img src={symborg} alt="Symborg" />
        <img src={catawba} alt="Catawba" />
        <img src={acp} alt="acp" />
        <img src={fcnecsa} alt="fcnecsa" />
      </section>
    </section>
  </>
}

export default Home

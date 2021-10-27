import { Link } from 'react-router-dom'
import { useQuery, gql } from "@apollo/client"

import logo from '../assets/img/logo_2.svg'

import symborg from '../assets/img/symborg.svg'
import catawba from '../assets/img/catawba.svg'
import acp from '../assets/img/acp.svg'
import fcnecsa from '../assets/img/fcnecsa.svg'

import campo from '../assets/img/campo.jpg'


const GET_CAROUSEL = gql`
  query {
    getCarousel {
      title
      text
      image
    }
  }
`

const GET_HOME = gql`
  query {
    getHome {
      title
      text
    }
  }
`

const Home = () => {

  const { error, data } = useQuery(GET_CAROUSEL)
  const { error: error2, data: data2 } = useQuery(GET_HOME)

  error && console.log(error)
  error2 && console.log(error2)

  return <>
    <div id="carouselExampleInterval" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        {data && data.getCarousel.map((item, index) => {
          return <div className={`header carousel-item ${!index && 'active'}`} data-bs-interval="5000" key={index}>
            <img src={item.image} className="home-img d-block w-100" alt="Bananas" />
            <section>
              <img src={logo} alt="logo" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </section>
          </div>
        })}
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
        {data2 && <> <h2>{data2.getHome.title}</h2><p>{data2.getHome.text}</p> </>}
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

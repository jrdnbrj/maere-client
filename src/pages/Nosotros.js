import { useQuery, gql } from '@apollo/client'

import doctor from '../assets/img/doctor.jpg'
import logo from '../assets/img/logo_3.svg'

import symborg from '../assets/img/symborg.svg'
import catawba from '../assets/img/catawba.svg'
import acp from '../assets/img/acp.svg'
import fcnecsa from '../assets/img/fcnecsa.svg'


const GET_US = gql`
    query {
        getUs {
            title
            text
            sequence
        }
    }
`

const Nosotros = () => {

    const { error, data } = useQuery(GET_US)

    error && console.log(error)

    return <>
        <section className="row" id="row-correction">
            <section className="col-lg-6 order-2 order-lg-1 us">
                {data && <>
                    <h1 data-aos="fade-down-right">{data.getUs[0].title}</h1>
                    <p data-aos="fade-down-right">{data.getUs[0].text}</p>
                </>}
            </section>
            <section className="col-lg-6 order-1 order-lg-2 campo">
                <img src={doctor} alt="Doctor Veterinario" />
            </section>
        </section>
        <section className="row hacemos" id="row-correction">
            <section className="col-lg-6">
                <img src={logo} alt="Logo" data-aos="fade-down-right" />
            </section>
            <section className="col-lg-6">
                {data && <>
                    <h1 data-aos="fade-down-left">{data.getUs[1].title}</h1>
                    <p data-aos="fade-down-left">{data.getUs[1].text}</p>
                </>}
            </section>
        </section>
        <section className="home-4" id="marcas-us">
            <h2 data-aos="fade-down">Representamos a los productos más innovadores del mercado</h2>
            <section className="row" id="row-correction">
                <div className="col-sm-2 col-lg-4" />
                <img src={symborg} className="col-sm-4 col-lg-1" alt="Symborg" data-aos="fade-right" />
                <img src={catawba} className="col-sm-4 col-lg-1" alt="Catawba" data-aos="fade-right" />
                <div className="col-sm-2 lg-hidden" />
                <div className="col-sm-2 lg-hidden" />
                <img src={acp} className="col-sm-4 col-lg-1" alt="acp" data-aos="fade-left" />
                <img src={fcnecsa} className="col-sm-4 col-lg-1" alt="fcnecsa" data-aos="fade-left" />
                <div className="col-sm-2 col-lg-4" />
            </section>
        </section>
    </>
}

export default Nosotros

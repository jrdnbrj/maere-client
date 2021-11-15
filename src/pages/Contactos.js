import { useQuery, gql } from "@apollo/client"

import ContactForm from '../components/ContactForm'

import logo from '../assets/img/logo_3.svg'

import symborg from '../assets/img/symborg.svg'
import catawba from '../assets/img/catawba.svg'
import acp from '../assets/img/acp.svg'
import fcnecsa from '../assets/img/fcnecsa.svg'


const GET_CONTACT_INFO = gql`
    query {
        getContactInfo {
            title
            text
        }
    }
`

const Contactos = () => {

    const { error, data } = useQuery(GET_CONTACT_INFO)

    error && console.log(error)

    return <>
        <section className="contact-header">
            {data && <>
                <h1>{data.getContactInfo[0].title}</h1>
                <p>{data.getContactInfo[0].text}</p>
            </>}
        </section>
        <section className="row contact-form" id="row-correction">
            <section className="col-12 col-lg-6 order-lg-1 order-2 contact-social">
                <img src={logo} alt="Maere Logo" />
                <section className="col-lg-6 social">
                    <p>Suscríbete a nuestras noticias</p>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <i className="bi bi-instagram" />
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <i className="bi bi-facebook" />
                    </a>
                </section>
            </section>
            <section className="col-12 col-lg-6 order-lg-2 order-1 home-52">
                <ContactForm />
            </section>
        </section>
        <section className="home-6">
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

export default Contactos

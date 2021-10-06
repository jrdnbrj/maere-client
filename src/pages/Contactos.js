import logo from '../assets/img/logo_3.svg'

import symborg from '../assets/img/symborg.svg'
import catawba from '../assets/img/catawba.svg'
import acp from '../assets/img/acp.svg'
import fcnecsa from '../assets/img/fcnecsa.svg'


const Contactos = () => {
    return <>
        <section className="contact-header">
            <h1>¿QUIÉNES SOMOS?</h1>
            <p>Somos una empresa agrícola enfocada en la introducción de productos innoavodres para los cultivos que permitan maximizar rendimientos de manera amigable con el medio ambiente.</p>
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
                <p>Cualquiera que sea la pregunta, ¡estamos aquí para ayudar!</p>
                <p>Recibirás las últimas noticias sobre nuestros productos y tips agrícolas de nueva generación.</p>
                <form>
                    <div className="form-floating">
                        <input type="text" className="form-control" placeholder="Juan Mera" />
                        <label>Nombre</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" placeholder="0999999999" />
                        <label>Teléfono</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" placeholder="nombre@maere.com" />
                        <label>Correo Electrónico</label>
                    </div>
                    <div className="form-floating">
                        <textarea type="text" className="form-control" placeholder="Escrute tu mensaje aquí" id="mensaje" />
                        <label>Mensaje</label>
                    </div>
                    <button type="submit" className="submit">Enviar</button>
                </form>
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

export default Contactos

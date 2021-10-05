import campo from '../assets/img/campo.jpg'
import logo from '../assets/img/logo_3.svg'

import symborg from '../assets/img/symborg.svg'
import catawba from '../assets/img/catawba.svg'
import acp from '../assets/img/acp.svg'
import fcnecsa from '../assets/img/fcnecsa.svg'


const Nosotros = () => {
    return <>
        <section className="row" id="row-correction">
            <section className="col-lg-6 order-2 order-lg-1 us">
                <h1>¿QUIÉNES SOMOS?</h1>
                <p>Somos una empresa agrícola, enfocada en la introducción de productos innovadores para los cultivos, que permitan maximizar rendimientos de manera amigable con el medio ambiente.</p>
            </section>
            <section className="col-lg-6 order-1 order-lg-2 campo">
                <img src={campo} alt="Campo" />
            </section>
        </section>
        <section className="row hacemos" id="row-correction">
            <section className="col-lg-6">
                <img src={logo} alt="Logo" />
            </section>
            <section className="col-lg-6">
                <h1>¿Qué hacemos?</h1>
                <p>Proveemos a nuestros clientes de alternativas innovadoras y diferenciadas que le permitan obtener una alta rentabilidad en sus manejos y cuyos resultados sean sostenibles en el tiempo.</p>
            </section>
        </section>
        <section className="home-4" id="marcas-us">
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

export default Nosotros

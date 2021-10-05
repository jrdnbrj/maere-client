import frutas from '../assets/img/frutas.jpg'
import logo from '../assets/img/logo_2.svg'

import symborg from '../assets/img/symborg.svg'
import catawba from '../assets/img/catawba.svg'
import acp from '../assets/img/acp.svg'
import fcnecsa from '../assets/img/fcnecsa.svg'

import prod from '../assets/img/prod.png'


const Productos = () => {
    return <>
        <section className="header">
            <img src={frutas} className="frutas" alt="frutas" />
            <section>
                <img src={logo} alt="logo" />
                <h3>TU ALIADO EN PRODUCCIÓN AGRÍCOLA LIMPIA Y EFICIENTE</h3>
                <p>Nuestra misión es generar cultivos mas eficientes y limpios para un mundo con alimentos y agricultura consciente.</p>
            </section>
        </section>
        <section className="bio-menu">
            <span>Bioestimulantes</span>
            <span>Biofertilizantes</span>
            <span>Biopesticidas</span>
            <span>Correctores de Suelo</span>
            <span>Fertilizantes Foliares</span>
        </section>
        <section className="products">
            <section className="bioestimulantes">
                <h2>BIOESTUMULANTES</h2>
                <img src={symborg} className="product-brand" alt="Symborg" />
                <img src={catawba} className="product-brand" alt="Catawba" />
                <img src={acp} className="product-brand" alt="acp" />
                <img src={fcnecsa} className="product-brand" alt="fcnecsa" />
                <section className="row product-list" id="row-correction">
                    <section className="col-lg-3">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3">
                        <img src={prod} alt="Producto" />
                    </section>
                </section>
            </section>
            <section className="biopesticidas">
                <h2>BIOPESTICIDAS</h2>
                <section className="row product-list" id="row-correction">
                    <section className="col-lg-3">
                        <img src={prod} alt="Producto" />
                    </section>
                </section>
            </section>
            <section className="biofertilizantes">
                <h2>BIOFERTILIZANTE</h2>
                <section className="row product-list" id="row-correction">
                    <section className="col-lg-3">
                        <img src={prod} alt="Producto" />
                    </section>
                </section>
            </section>
            <section className="correctores">
                <h2>CORRECTORES DE SUELO</h2>
                <section className="row product-list" id="row-correction">
                    <section className="col-lg-3">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3">
                        <img src={prod} alt="Producto" />
                    </section>
                </section>
            </section>
            <section className="fertilizantes">
                <h2>FERTILIZANTES FOLIARES</h2>
                <section className="row product-list" id="row-correction">
                    <section className="col-lg-3">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3">
                        <img src={prod} alt="Producto" />
                    </section>
                </section>
            </section>
        </section>
    </>
}

export default Productos

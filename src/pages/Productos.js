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
            <span><a href="#bioestimulantes">Bioestimulantes</a></span>
            <span><a href="#biopesticidas">Biopesticidas</a></span>
            <span><a href="#biofertilizantes">Biofertilizantes</a></span>
            <span><a href="#correctores">Correctores de Suelo</a></span>
            <span><a href="#fertilizantes">Fertilizantes Foliares</a></span>
        </section>
        <section className="products">
            <section className="bioestimulantes">
                <section className="row">
                    <img src={symborg} className="product-brand col" alt="Symborg" />
                    <img src={catawba} className="product-brand col" alt="Catawba" />
                    <img src={acp} className="product-brand col" alt="acp" />
                    <img src={fcnecsa} className="product-brand col" alt="fcnecsa" />
                </section>
                <h2 id="bioestimulantes">BIOESTUMULANTES</h2>
                <section className="row product-list" id="row-correction">
                    <section className="col-lg-3 col-12 col-sm-6">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3 col-12 col-sm-6">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3 col-12 col-sm-6">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3 col-12 col-sm-6">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3 col-12 col-sm-6">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3 col-12 col-sm-6">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3 col-12 col-sm-6">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3 col-12 col-sm-6">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3 col-12 col-sm-6">
                        <img src={prod} alt="Producto" />
                    </section>
                </section>
            </section>
            <section className="biopesticidas">
                <h2 id="biopesticidas">BIOPESTICIDAS</h2>
                <section className="row product-list" id="row-correction">
                    <section className="col-lg-3 col-12 col-sm-6">
                        <img src={prod} alt="Producto" />
                    </section>
                </section>
            </section>
            <section className="biofertilizantes">
                <h2 id="biofertilizantes">BIOFERTILIZANTES</h2>
                <section className="row product-list" id="row-correction">
                    <section className="col-lg-3 col-12 col-sm-6">
                        <img src={prod} alt="Producto" />
                    </section>
                </section>
            </section>
            <section className="correctores">
                <h2 id="correctores">CORRECTORES DE SUELO</h2>
                <section className="row product-list" id="row-correction">
                    <section className="col-lg-3 col-12 col-sm-6">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3 col-12 col-sm-6">
                        <img src={prod} alt="Producto" />
                    </section>
                </section>
            </section>
            <section className="fertilizantes">
                <h2 id="fertilizantes">FERTILIZANTES FOLIARES</h2>
                <section className="row product-list" id="row-correction">
                    <section className="col-lg-3 col-12 col-sm-6">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3 col-12 col-sm-6">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3 col-12 col-sm-6">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3 col-12 col-sm-6">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3 col-12 col-sm-6">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3 col-12 col-sm-6">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3 col-12 col-sm-6">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3 col-12 col-sm-6">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3 col-12 col-sm-6">
                        <img src={prod} alt="Producto" />
                    </section>
                    <section className="col-lg-3 col-12 col-sm-6">
                        <img src={prod} alt="Producto" />
                    </section>
                </section>
            </section>
        </section>
    </>
}

export default Productos

import campo from '../assets/img/campo.jpg'
import logo from '../assets/img/logo_3.svg'


const Footer = () => {
    return <>
        <section className="row" id="row-correction">
            <section className="col-12 col-lg-6 campo">
                <img src={campo} alt="Campo" />
            </section>
            <section className="col-12 col-lg-6 home-52">
                <p>Cualquiera que sea la pregunta, ¡estamos aquí para ayudar!</p>
                <p>Recibirás las últimas noticias sobre nuestros productos y tips agrícolas de nueva generación.</p>
                <form>
                    <div className="form-floating">
                        <input type="text" className="form-control" placeholder="Juan Mera" required />
                        <label>Nombre</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" placeholder="0999999999" required />
                        <label>Teléfono</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" placeholder="nombre@maere.com" required />
                        <label>Correo Electrónico</label>
                    </div>
                    <div className="form-floating">
                        <textarea type="text" className="form-control" placeholder="Escribe tu mensaje aquí" id="mensaje" required />
                        <label>Mensaje</label>
                    </div>
                    <button type="submit" className="submit">Enviar</button>
                </form>
            </section>
        </section>
        <section className="footer row" id="row-correction">
            <section className="col-lg-6">
                <img src={logo} alt="logo" className="logo-footer" />
                <span className="mt-3">La Tierra & Shyris. E0435.</span>
                <span>Quito - Ecuador</span>
            </section>
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
    </>
}

export default Footer

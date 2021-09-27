import logo from '../assets/img/logo_3.png'


const Footer = () => {
    return <section className="footer row" id="row-correction">
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
}

export default Footer

import { useQuery, useMutation, gql } from '@apollo/client'


const GET_CAROUSEL = gql`
    query {
        getCarousel {
            id
            title
            text
            image
            sequence
        }
    }
`

const GET_HOME = gql`
    query {
        getHome {
            id
            title
            text
        }
    }
`

const GET_PRODUCT_HEADER = gql`
    query {
        getProductHeader {
            id
            title
            text
        }
    }
`

const GET_US = gql`
    query {
        getUs {
            id
            title
            text
            sequence
        }
    }
`

const GET_CONTACT_INFO = gql`
    query {
        getContactInfo {
            id
            title
            text
        }
    }
`

const Maere = () => {

    const { loading, error, data } = useQuery(GET_CAROUSEL)
    const { loading: loadingHome, error: errorHome, data: dataHome } = useQuery(GET_HOME)
    const { loading: loadingProduct, error: errorProduct, data: dataProduct } = useQuery(GET_PRODUCT_HEADER)
    const { loading: loadingUs, error: errorUs, data: dataUs } = useQuery(GET_US)
    const { loading: loadingContact, error: errorContact, data: dataContact } = useQuery(GET_CONTACT_INFO)

    const saveCarousel = (e, id) => {
        e.preventDefault()
        console.log('Guardando Carousel.', id)
    }

    const saveHome = (e, id) => {
        e.preventDefault()
        console.log('Guardando Home.', id)
    }

    const saveProductHeader = (e, id) => {
        e.preventDefault()
        console.log('Guardando Product Header.', id)
    }

    const saveUs = (e, id) => {
        e.preventDefault()
        console.log('Guardando US.', id)
    }

    const saveContactInfo = (e, id) => {
        e.preventDefault()
        console.log('Guardando Contact Info.', id)
    }

    error && console.log(error)
    errorHome && console.log(errorHome)
    errorProduct && console.log(errorProduct)
    errorUs && console.log(errorUs)
    errorContact && console.log(errorContact)

    if (loading) return <h4>Cargando Carrusel...</h4>
    if (loadingHome) return <h4>Cargando Home...</h4>
    if (loadingProduct) return <h4>Cargando Productos...</h4>
    if (loadingUs) return <h4>Cargando Nosotros...</h4>
    if (loadingContact) return <h4>Cargando Información de Contacto...</h4>

    return <section>
        <section className="maere-carousel">
            <h1 className="display-6 ms-3">Carrusel</h1>
            <section className="row" id="row-correction">
                {data.getCarousel.map(item => {
                    return <form className="col-sm-12 col-lg-6" key={item.sequence} onSubmit={e => saveCarousel(e, item.id)}>
                        <div className="form-floating mb-3">
                            <textarea className="form-control" defaultValue={item.title} />
                            <label>Título</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea className="form-control" defaultValue={item.text} />
                            <label>Texto</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" defaultValue={item.sequence} />
                            <label>Secuencia</label>
                        </div>
                        <div className="input-group mb-3">
                            <input type="file" className="form-control" />
                            <label className="input-group-text" onClick={() => window.open(item.image, '_blank')}>
                                Ver Imagen Actual
                            </label>
                        </div>
                        <button className="btn btn-success mb-5" type="submit">Guardar</button>
                    </form>
                })}
            </section>
        </section>   
        <section className="maere-home">
            <h1 className="display-6 ms-3">Home</h1>
            <form>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="Revolucionamos la manera en la que desarrollas tus cultivos con resultados medibles" />
                    <label>Título</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="Con la asesoría de nuestros expertos en campo, garantizamos resultados medibles y crecimiento de producción a mediano y largo plazo en todas las áreas de producción agrícola en Ecuador." rows="3" />
                    <label>Texto</label>
                </div>
                <button className="btn btn-success mb-5">Guardar</button>
            </form>
        </section>
        <section className="maere-prod">
            <h1 className="display-6 ms-3">Productos</h1>
            <form>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="TU ALIADO EN PRODUCCIÓN AGRÍCOLA LIMPIA Y EFICIENTE" />
                    <label>Título</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="Nuestra misión es generar cultivos mas eficientes y limpios para un mundo con alimentos y agricultura consciente." rows="3" />
                    <label>Texto</label>
                </div>
                <button className="btn btn-success mb-5">Guardar</button>
            </form>
        </section>
        <section className="maere-us">
            <h1 className="display-6 ms-3">Nosotros</h1>
            <form>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="¿QUIÉNES SOMOS?" />
                    <label>Título</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="Somos una empresa agrícola, enfocada en la introducción de productos innovadores para los cultivos, que permitan maximizar rendimientos de manera amigable con el medio ambiente." rows="3" />
                    <label>Texto</label>
                </div>
                <button className="btn btn-success mb-5">Guardar</button>
            </form>
            <form>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="¿Qué hacemos?" />
                    <label>Título</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="Proveemos a nuestros clientes de alternativas innovadoras y diferenciadas que le permitan obtener una alta rentabilidad en sus manejos y cuyos resultados sean sostenibles en el tiempo." rows="3" />
                    <label>Texto</label>
                </div>
                <button className="btn btn-success mb-5">Guardar</button>
            </form>
        </section>
        <section className="maere-contact">
            <h1 className="display-6 ms-3">Información de Contacto</h1>
            <form>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="¿QUIÉNES SOMOS?" />
                    <label>Título</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="Somos una empresa agrícola, enfocada en la introducción de productos innovadores para los cultivos, que permitan maximizar rendimientos de manera amigable con el medio ambiente." rows="3" />
                    <label>Texto</label>
                </div>
                <div className="input-group mb-3">
                    <input type="file" className="form-control" />
                    <label 
                        className="input-group-text" 
                        onClick={() => window.open('http://localhost:8000/static/campo.jpg', '_blank')}>
                        Ver Imagen Actual
                    </label>
                </div>
                <button className="btn btn-success mb-5">Guardar</button>
            </form>
            <form>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="Cualquiera que sea la pregunta, ¡estamos aquí para ayudar!" />
                    <label>Título</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="Recibirás las últimas noticias sobre nuestros productos y tips agrícolas de nueva generación." rows="3" />
                    <label>Texto</label>
                </div>
                <button className="btn btn-success mb-5">Guardar</button>
            </form>
        </section>
    </section>
}

export default Maere

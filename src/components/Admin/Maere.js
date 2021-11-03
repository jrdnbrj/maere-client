import { useQuery, gql } from '@apollo/client'


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
            title
            text
        }
    }
`

const GET_PRODUCT_HEADER = gql`
    query {
        getProductHeader {
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
            sequence
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

    const saveHome = e => {
        e.preventDefault()
        console.log('Guardando Home.')
    }

    const saveProductHeader = e => {
        e.preventDefault()
        console.log('Guardando Product Header.')
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
        <hr className="dropdown-divider" />
        <section className="row" id="row-correction">
            <section className="maere-home col-sm-12 col-lg-6">
                <h1 className="display-6">Home</h1>
                    {dataHome && <>
                        <form onSubmit={saveHome}>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" defaultValue={dataHome.getHome.title} />
                                <label>Título</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" defaultValue={dataHome.getHome.text} />
                                <label>Texto</label>
                            </div>
                            <button className="btn btn-success mb-5" type="submit">Guardar</button>
                        </form>
                    </>}
            </section>
            <section className="maere-prod col-sm-12 col-lg-6">
                <h1 className="display-6">Productos</h1>
                    {dataProduct && <>
                        <form onSubmit={saveProductHeader}>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" defaultValue={dataProduct.getProductHeader.title} />
                                <label>Título</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" defaultValue={dataProduct.getProductHeader.text} />
                                <label>Texto</label>
                            </div>
                            <button className="btn btn-success mb-5" type="submit">Guardar</button>
                        </form>
                    </>}
            </section>
        </section>
        <hr className="dropdown-divider" />
        <section className="row" id="row-correction">
            <section className="maere-us col-sm-12 col-lg-6">
                <h1 className="display-6">Nosotros</h1>
                {dataUs && dataUs.getUs.map(item => {
                    return <form key={item.sequence} onSubmit={e => saveUs(e, item.id)}>
                        <div className="form-floating mb-3">
                            <textarea className="form-control" defaultValue={item.title} />
                            <label>Título</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea className="form-control" defaultValue={item.text} />
                            <label>Texto</label>
                        </div>
                        <button className="btn btn-success mb-5" type="submit">Guardar</button>
                    </form>
                })}
            </section>
            <section className="maere-contact col-sm-12 col-lg-6">
                <h1 className="display-6">Información de Contacto</h1>
                {dataContact && dataContact.getContactInfo.map(item => {
                    return <form key={item.sequence} onSubmit={e => saveContactInfo(e, item.id)}>
                        <div className="form-floating mb-3">
                            <textarea className="form-control" defaultValue={item.title} />
                            <label>Título</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea className="form-control" defaultValue={item.text} />
                            <label>Texto</label>
                        </div>
                        <button className="btn btn-success mb-5" type="submit">Guardar</button>
                    </form>
                })}
            </section>
        </section>
    </section>
}

export default Maere

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

const CREATE_CAROUSEL_ITEM = gql`
    mutation ($title: String!, $text: String!, $image: String!, $sequence: Int!) {
        createCarousel(title: $title, text: $text, image: $image, sequence: $sequence) {
            result
        }
    }
`

const EDIT_CAROUSEL_ITEM = gql`
    mutation ($id: ID!, $title: String!, $text: String!, $image: String, $sequence: Int!) {
        editCarousel(id: $id, title: $title, text: $text, image: $image, sequence: $sequence) {
            result
        }
    }
`

const DELETE_CAROUSEL_ITEM = gql`
    mutation ($id: ID!) {
        deleteCarousel(id: $id) {
            result
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

const EDIT_HOME = gql`
    mutation ($title: String!, $text: String!) {
        editHome(title: $title, text: $text) {
            result
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

const EDIT_PRODUCT_HEADER = gql`
    mutation ($title: String!, $text: String!) {
        editProductHeader(title: $title, text: $text) {
            result
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

const EDIT_US = gql`
    mutation ($id: ID!, $title: String!, $text: String!) {
        editUs(id: $id, title: $title, text: $text) {
            result
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

const EDIT_CONTACT_INFO = gql`
    mutation ($id: ID!, $title: String!, $text: String!) {
        editContactInfo(id: $id, title: $title, text: $text) {
            result
        }
    }
`

const Maere = () => {

    const { loading, error, data, refetch } = useQuery(GET_CAROUSEL)
    const { loading: loadingHome, error: errorHome, data: dataHome } = useQuery(GET_HOME)
    const { loading: loadingProduct, error: errorProduct, data: dataProduct } = useQuery(GET_PRODUCT_HEADER)
    const { loading: loadingUs, error: errorUs, data: dataUs } = useQuery(GET_US)
    const { loading: loadingContact, error: errorContact, data: dataContact } = useQuery(GET_CONTACT_INFO)

    const [createCarousel] = useMutation(CREATE_CAROUSEL_ITEM, {
        onCompleted: ({ createCarousel }) => {
            if (createCarousel.result) {
                alert('Item del Carrusel creado con éxito.')
                refetch()
            } else alert('Error al crear un item del Carrusel. Inténtalo de nuevo.')
        },
        onError: ({ networkError: { result: { errors: err } } }) => {
            console.log(err[0].message)
            if (err[0].message.includes("'sequence':"))
                alert('El número de la secuencia ya existe.')
            else if (err[0].message.includes("'title':"))
                alert('Ocurrió un error con el campo del Título. Inténtalo de nuevo.')
            else if (err[0].message.includes("'text':"))
                alert('Ocurrió un error con el campo del Texto. Inténtalo de nuevo.')
            else if (err[0].message.includes("'image':"))
                alert('Ocurrió un error con el campo de la Imagen. Inténtalo de nuevo.')
            else alert('Error al editar el item del Carrusel. Inténtalo de nuevo.')
        }
    })

    const [editCarousel] = useMutation(EDIT_CAROUSEL_ITEM, {
        onCompleted: ({ editCarousel }) => {
            if (editCarousel.result) {
                alert('Item del Carrusel editado con éxito.')
                refetch()
            } else alert('Error al editar el item del Carrusel. Inténtalo de nuevo.')
        },
        onError: ({ networkError: { result: { errors: err } } }) => {
            console.log(err[0].message)
            if (err[0].message.includes("'sequence':"))
                alert('El número de la secuencia ya existe.')
            else if (err[0].message.includes("'title':"))
                alert('Ocurrió un error con el campo del Título. Inténtalo de nuevo.')
            else if (err[0].message.includes("'text':"))
                alert('Ocurrió un error con el campo del Texto. Inténtalo de nuevo.')
            else if (err[0].message.includes("'image':"))
                alert('Ocurrió un error con el campo de la Imagen. Inténtalo de nuevo.')
            else alert('Error al editar el item del Carrusel. Inténtalo de nuevo.')
        }
    })

    const [deleteCarousel] = useMutation(DELETE_CAROUSEL_ITEM, {
        onCompleted: ({ deleteCarousel }) => {
            if (deleteCarousel.result) refetch()
            else alert('Error al eliminar el item del Carrusel. Inténtalo de nuevo.')
        },
        onError: ({ networkError: { result: { errors: err } } }) => {
            console.log(err[0].message)
            alert('Error al eliminar el item del Carrusel. Inténtalo de nuevo.')
        }
    })

    const [editHome] = useMutation(EDIT_HOME, {
        onCompleted: ({ editHome }) => {
            if (editHome.result) alert('Home editado con éxito.')
            else alert('Error al editar el Home. Inténtalo de nuevo.')
        },
        onError: ({ networkError: { result: { errors: err } } }) => {
            console.log(err[0].message)
            if (err[0].message.includes("'title':"))
                alert('Ocurrió un error con el campo del Título. Inténtalo de nuevo.')
            else if (err[0].message.includes("'text':"))
                alert('Ocurrió un error con el campo del Texto. Inténtalo de nuevo.')
            else alert('Error al editar el Home. Inténtalo de nuevo.')
        }
    })

    const [editProductHeader] = useMutation(EDIT_PRODUCT_HEADER, {
        onCompleted: ({ editProductHeader }) => {
            if (editProductHeader.result) alert('Header de Productos editado con éxito.')
            else alert('Error al editar el Header de Productos. Inténtalo de nuevo.')
        },
        onError: ({ networkError: { result: { errors: err } } }) => {
            console.log(err[0].message)
            if (err[0].message.includes("'title':"))
                alert('Ocurrió un error con el campo del Título. Inténtalo de nuevo.')
            else if (err[0].message.includes("'text':"))
                alert('Ocurrió un error con el campo del Texto. Inténtalo de nuevo.')
            else alert('Error al editar el Header de Productos. Inténtalo de nuevo.')
        }
    })

    const [editUs] = useMutation(EDIT_US, {
        onCompleted: ({ editUs }) => {
            if (editUs.result) alert('Info de Nosotros editado con éxito.')
            else alert('Error al editar info de Nosotros. Inténtalo de nuevo.')
        },
        onError: ({ networkError: { result: { errors: err } } }) => {
            console.log(err[0].message)
            if (err[0].message.includes("'title':"))
                alert('Ocurrió un error con el campo del Título. Inténtalo de nuevo.')
            else if (err[0].message.includes("'text':"))
                alert('Ocurrió un error con el campo del Texto. Inténtalo de nuevo.')
            else alert('Error al editar info de Nosotros. Inténtalo de nuevo.')
        }
    })

    const [editContactInfo] = useMutation(EDIT_CONTACT_INFO, {
        onCompleted: ({ editContactInfo }) => {
            if (editContactInfo.result) alert('Info de Contacto editado con éxito.')
            else alert('Error al editar info de Contacto. Inténtalo de nuevo.')
        },
        onError: ({ networkError: { result: { errors: err } } }) => {
            console.log(err[0].message)
            if (err[0].message.includes("'title':"))
                alert('Ocurrió un error con el campo del Título. Inténtalo de nuevo.')
            else if (err[0].message.includes("'text':"))
                alert('Ocurrió un error con el campo del Texto. Inténtalo de nuevo.')
            else alert('Error al editar info de Contacto. Inténtalo de nuevo.')
        }
    })

    const create = e => {
        e.preventDefault() 

        const title = document.getElementById('new-title').value
        const text = document.getElementById('new-text').value
        const sequence = parseInt(document.getElementById('new-sequence').value)
        const img = document.getElementById('new-img')
        
        const reader = new FileReader()
        reader.readAsDataURL(img.files[0])
        reader.onloadend = () => {
            const image = reader.result
            createCarousel({ variables: { title, text, image, sequence } })
        }
    }

    const CreateModal = () => {
        return <form id='carousel-modal' className="modal-container" onSubmit={create}>
            <div className="modal-content">
                <div className="modal-header row" id="row-correction">
                    <div className="col-10">
                        <strong>Crear Item del Carrusel</strong>
                    </div>
                    <div className="col-2">
                        <span className="modal-close" onClick={closeModal}>
                            <i className="bi-x-lg" />
                        </span>
                    </div>
                </div>
                <div className="modal-body">
                    <div className="form-floating mb-3">
                        <textarea className="form-control" id="new-title" required />
                        <label>Título</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control" id="new-text" required />
                        <label>Texto</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="new-sequence" required />
                        <label>Secuencia</label>
                    </div>
                    <div className="form-text">La imagen debe tener una dimensión de 2x1.</div>
                    <div className="input-group mb-3">
                        <input type="file" className="form-control" id="new-img" required />
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn-danger btn" type="button" onClick={closeModal}>
                        Cancelar
                    </button>
                    <button className="btn-success btn" type="submit">
                        Crear Item
                    </button>
                </div>
            </div>
        </form>
    }

    const openModal = () => {
        const modal = document.getElementById('carousel-modal')
        modal.style.display = 'block'
    }

    const closeModal = () => {
        const modal = document.getElementById('carousel-modal')
        modal.style.display = 'none'
    }

    const saveCarousel = (e, id, i) => {
        e.preventDefault()
        console.log('Guardando Carousel.', id)
        const title = document.getElementById(`title-${i}`).value
        const text = document.getElementById(`text-${i}`).value
        const sequence = parseInt(document.getElementById(`sequence-${i}`).value)
        const img = document.getElementById(`img-${i}`)

        if (img.files.length > 0) {
            const reader = new FileReader()
            reader.readAsDataURL(img.files[0])
            reader.onloadend = () => {
                const image = reader.result
                editCarousel({ variables: { id, title, text, image, sequence } })
            }
        } else editCarousel({ variables: { id, title, text, sequence } })
    }

    const removeCarousel = (id, title, text) => {
        if (window.confirm(`¿Deseas eliminar el siguiente item del carrusel? \n\n ${title} \n\n ${text}`))
            deleteCarousel({ variables: { id } })
    }

    const saveHome = e => {
        e.preventDefault()

        const title = document.getElementById('home-title').value
        const text = document.getElementById('home-text').value

        editHome({ variables: { title, text } })
    }

    const saveProductHeader = e => {
        e.preventDefault()

        const title = document.getElementById('product-title').value
        const text = document.getElementById('product-text').value

        editProductHeader({ variables: { title, text } })
    }

    const saveUs = (e, id, i) => {
        e.preventDefault()

        const title = document.getElementById(`us-title-${i}`).value
        const text = document.getElementById(`us-text-${i}`).value

        editUs({ variables: { id, title, text } })
    }

    const saveContactInfo = (e, id, i) => {
        e.preventDefault()

        const title = document.getElementById(`contact-title-${i}`).value
        const text = document.getElementById(`contact-text-${i}`).value

        editContactInfo({ variables: { id, title, text } })
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
        <CreateModal />
        <section className="maere-carousel">
            <div className="carousel-title">
                <h1 className="display-6">Carrusel</h1>
                <button className="btn btn-primary" onClick={openModal} title="Agregar Item al Carrusel">
                    <i className="bi bi-plus-circle" />
                </button>
            </div>
            <section className="row">
                {data.getCarousel.map((item, i) => {
                    return <form 
                        className="col-sm-12 col-lg-6" 
                        key={item.sequence} 
                        onSubmit={e => saveCarousel(e, item.id, i)}
                    >
                        <div className="form-floating mb-3">
                            <textarea className="form-control" id={`title-${i}`} defaultValue={item.title} />
                            <label>Título</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea className="form-control" id={`text-${i}`} defaultValue={item.text} />
                            <label>Texto</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" id={`sequence-${i}`} defaultValue={item.sequence} />
                            <label>Secuencia</label>
                        </div>
                        <div className="form-text">La imagen debe tener una dimensión de 2x1.</div>
                        <div className="input-group mb-3">
                            <input type="file" id={`img-${i}`} className="form-control" />
                            <label 
                                className="input-group-text" title="Ver Imagen Actual" 
                                onClick={() => window.open(item.image, '_blank')}
                            >
                                <i className="bi bi-image-fill" />
                            </label>
                        </div>
                        <button className="btn btn-sm btn-success mb-5 me-2" type="submit">Guardar</button>
                        <button 
                            className="btn btn-sm btn-danger mb-5" type="button" 
                            title="Eliminar Item del Carrusel"
                            onClick={() => removeCarousel(item.id, item.title, item.text)}
                        >
                            <i className="bi bi-trash-fill" />
                        </button>
                    </form>
                })}
            </section>
        </section>
        <hr className="dropdown-divider" />
        <section className="row">
            <section className="maere-home col-sm-12 col-lg-6">
                <h1 className="display-6">Home</h1>
                    {dataHome && <>
                        <form onSubmit={saveHome}>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="home-title" defaultValue={dataHome.getHome.title} />
                                <label>Título</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="home-text" defaultValue={dataHome.getHome.text} />
                                <label>Texto</label>
                            </div>
                            <button className="btn btn-sm btn-success mb-5" type="submit">Guardar</button>
                        </form>
                    </>}
            </section>
            <section className="maere-prod col-sm-12 col-lg-6">
                <h1 className="display-6">Productos</h1>
                    {dataProduct && <>
                        <form onSubmit={saveProductHeader}>
                            <div className="form-floating mb-3">
                                <textarea 
                                    className="form-control" id="product-title" 
                                    defaultValue={dataProduct.getProductHeader.title} 
                                />
                                <label>Título</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea 
                                    className="form-control" id="product-text" 
                                    defaultValue={dataProduct.getProductHeader.text} 
                                />
                                <label>Texto</label>
                            </div>
                            <button className="btn btn-sm btn-success mb-5" type="submit">Guardar</button>
                        </form>
                    </>}
            </section>
        </section>
        <hr className="dropdown-divider" />
        <section className="row">
            <section className="maere-us col-sm-12 col-lg-6">
                <h1 className="display-6">Nosotros</h1>
                {dataUs && dataUs.getUs.map((item, i) => {
                    return <form key={item.sequence} onSubmit={e => saveUs(e, item.id, i)}>
                        <div className="form-floating mb-3">
                            <textarea className="form-control" id={`us-title-${i}`} defaultValue={item.title} />
                            <label>Título</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea className="form-control" id={`us-text-${i}`} defaultValue={item.text} />
                            <label>Texto</label>
                        </div>
                        <button className="btn btn-sm btn-success mb-5" type="submit">Guardar</button>
                    </form>
                })}
            </section>
            <section className="maere-contact col-sm-12 col-lg-6">
                <h1 className="display-6">Información de Contacto</h1>
                {dataContact && dataContact.getContactInfo.map((item, i) => {
                    return <form key={item.sequence} onSubmit={e => saveContactInfo(e, item.id, i)}>
                        <div className="form-floating mb-3">
                            <textarea className="form-control" id={`contact-title-${i}`} defaultValue={item.title} />
                            <label>Título</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea className="form-control" id={`contact-text-${i}`} defaultValue={item.text} />
                            <label>Texto</label>
                        </div>
                        <button className="btn btn-sm btn-success mb-5" type="submit">Guardar</button>
                    </form>
                })}
            </section>
        </section>
    </section>
}

export default Maere

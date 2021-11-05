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
        onError: error => {
            const err = error.networkError.result.errors[0].message
            console.log(err)

            if (err.includes("'sequence':"))
                alert('El número de la secuencia ya existe.')
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
        onError: error => {
            const err = error.networkError.result.errors[0].message
            console.log(err)

            if (err.includes("'sequence':"))
                alert('El número de la secuencia ya existe.')
            else alert('Error al editar el item del Carrusel. Inténtalo de nuevo.')
        },
    })

    const [deleteCarousel] = useMutation(DELETE_CAROUSEL_ITEM, {
        onCompleted: ({ deleteCarousel }) => {
            if (deleteCarousel.result) refetch()
            else alert('Error al eliminar el item del Carrusel. Inténtalo de nuevo.')
        },
        onError: error => {
            console.log(error.networkError.result.errors[0].message)
            alert('Error al eliminar el item del Carrusel. Inténtalo de nuevo.')
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
                        <strong>Crear Producto</strong>
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
                        Cancel
                    </button>
                    <button className="btn-success btn" type="submit">
                        Create
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
                            <label className="input-group-text" onClick={() => window.open(item.image, '_blank')}>
                                <i className="bi bi-image-fill" title="Ver Imagen Actual" />
                            </label>
                        </div>
                        <button className="btn btn-sm btn-success mb-5 me-2" type="submit">Guardar</button>
                        <button 
                            className="btn btn-sm btn-danger mb-5" type="button" 
                            onClick={() => removeCarousel(item.id, item.title, item.text)}
                        >
                            <i className="bi bi-trash-fill" title="Eliminar Producto" />
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
                                <textarea className="form-control" defaultValue={dataHome.getHome.title} />
                                <label>Título</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" defaultValue={dataHome.getHome.text} />
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
                                <textarea className="form-control" defaultValue={dataProduct.getProductHeader.title} />
                                <label>Título</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" defaultValue={dataProduct.getProductHeader.text} />
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
                        <button className="btn btn-sm btn-success mb-5" type="submit">Guardar</button>
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
                        <button className="btn btn-sm btn-success mb-5" type="submit">Guardar</button>
                    </form>
                })}
            </section>
        </section>
    </section>
}

export default Maere

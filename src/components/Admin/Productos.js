import { useQuery, useMutation, gql } from '@apollo/client'


const GET_CATEGORIES = gql`
    query getCategories {
        getCategories {
            id
            name
            sequence
        }
    }
`

const GET_PRODUCTOS = gql`
    query {
        getProducts {
            id
            name
            formulator
            category
            image
            url
        }
    }
`

const EDIT_PRODUCT = gql`
    mutation ($id: String!, $name: String!, $formulator: String!, $category: String!, $image: String, $url: String!) {
        editProduct(id: $id, name: $name, formulator: $formulator, category: $category, image: $image, url: $url) {
            result
        }
    }
`

const DELETE_PRODUCT = gql`
    mutation ($id: String!) {
        deleteProduct(id: $id) {
            result
        }
    }
`

const CREATE_PRODUCT = gql`
    mutation ($name: String!, $formulator: String!, $category: String!, $image: String!, $url: String!) {
        createProduct(name: $name, formulator: $formulator, category: $category, image: $image, url: $url) {
            result
        }
    }
`

const Productos = ({ Loading }) => {
    
    const { loading, error, data, refetch } = useQuery(GET_PRODUCTOS)
    const { loading: categoryLoading, error: categoryError, data: categoryData } = useQuery(GET_CATEGORIES)

    error && console.log(error)
    categoryError && console.log(categoryError)

    const [editProduct] = useMutation(EDIT_PRODUCT, {
        onCompleted: ({ editProduct }) => {
            if (editProduct.result) {
                refetch()
                alert('✔️ Producto editado con éxito.')
            } else alert('❌ Hubo un error editando la información del producto. Inténtalo de nuevo.')
        },
        onError: ({ networkError: { result: { errors: err } } }) => {
            console.log(err[0].message)
            if (err[0].message.includes("'name':"))
                alert('❌ Ocurrió un error con el campo del Nombre. Inténtalo de nuevo.')
            else if (err[0].message.includes("'formulator':"))
                alert('❌ Ocurrió un error con el campo del Formulador. Inténtalo de nuevo.')
            else if (err[0].message.includes("'category':"))
                alert('❌ Ocurrió un error con el campo de la Categoría. Inténtalo de nuevo.')
            else if (err[0].message.includes("'image':"))
                alert('❌ Ocurrió un error con el campo de la Imagen. Inténtalo de nuevo.')
            else if (err[0].message.includes("'url':"))
                alert('❌ Ocurrió un error con el campo de la URL. Inténtalo de nuevo.')
            else alert('❌ Hubo un error editando la información del producto. Inténtalo de nuevo.')
        }
    })

    const [deleteProduct] = useMutation(DELETE_PRODUCT, {
        onCompleted: ({ deleteProduct }) => {
            if (deleteProduct.result) refetch()
            else alert('❌ Hubo un error eliminando el producto. Inténtalo de nuevo.')
        },
        onError: ({ networkError: { result: { errors: err } } }) => {
            console.log(err[0].message)
            alert('❌ Hubo un error eliminando el producto. Inténtalo de nuevo.')
        }
    })

    const [createProduct] = useMutation(CREATE_PRODUCT, {
        onCompleted: ({ createProduct }) => {
            if (createProduct.result) {
                refetch()
                alert('✔️ Se creó un nuevo producto.')
            } else alert('❌ Hubo un error creando el producto. Inténtalo de nuevo.')
        },
        onError: ({ networkError: { result: { errors: err } } }) => {
            console.log(err[0].message)
            if (err[0].message.includes("'name':"))
                alert('❌ Ocurrió un error con el campo del Nombre. Inténtalo de nuevo.')
            else if (err[0].message.includes("'formulator':"))
                alert('❌ Ocurrió un error con el campo del Formulador. Inténtalo de nuevo.')
            else if (err[0].message.includes("'category':"))
                alert('❌ Ocurrió un error con el campo de la Categoría. Inténtalo de nuevo.')
            else if (err[0].message.includes("'image':"))
                alert('❌ Ocurrió un error con el campo de la Imagen. Inténtalo de nuevo.')
            else if (err[0].message.includes("'url':"))
                alert('❌ Ocurrió un error con el campo de la URL. Inténtalo de nuevo.')
            else alert('❌ Hubo un error creando el producto. Inténtalo de nuevo.')
        }
    })

    const saveProduct = (e, id, i) => {
        e.preventDefault()

        const name = document.getElementById(`name-${i}`).value
        const formulator = document.getElementById(`formulator-${i}`).value
        const category = document.getElementById(`category-${i}`).value
        const url = document.getElementById(`url-${i}`).value
        const image = document.getElementById(`image-${i}`)

        if (image.files.length > 0) {
            const reader = new FileReader()
            reader.readAsDataURL(image.files[0])
            reader.onloadend = () => {
                editProduct({ 
                    variables: { id, name, formulator, category, url, image: reader.result } 
                })
            }
        } else editProduct({ variables: { id, name, formulator, category, url } })
    }

    const removeProduct = (id, name) => {
        if (window.confirm(`¿Deseas eliminar "${name}" de productos?`))
            deleteProduct({ variables: { id } })
    }

    const create = e => {
        e.preventDefault() 

        const name = document.getElementById('new-name').value
        const formulator = document.getElementById('new-formulator').value
        const category = document.getElementById('new-category').value
        const url = document.getElementById('new-url').value
        const image = document.getElementById('new-image')
        
        if (image.files.length > 0) {
            const reader = new FileReader()
            reader.readAsDataURL(image.files[0])
            reader.onloadend = () => {
                createProduct({ 
                    variables: { name, formulator, category, url, image: reader.result } 
                })
            }
        }
    }

    const CreateModal = () => {
        return <form id='create-modal' className="modal-container" onSubmit={create}>
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
                        <input type="text" className="form-control" id="new-name" required />
                        <label>Nombre</label>
                    </div>
                    <div className="form-floating mb-3">
                        <select className="form-select" id="new-formulator" required>
                            <option hidden value=''>Selecciona un formulador</option>
                            <option value="Symborg">Symborg</option>
                            <option value="Catawba">Catawba Enterprising</option>
                            <option value="ACP">Agro Correctores del Pacífico</option>
                            <option value="Fenecsa">Fenecsa</option>
                        </select>
                        <label>Formulador</label>
                    </div>
                    <div className="form-text">Para nuevas categorias se debe ir a la tab de Categorias.</div>
                    <div className="form-floating mb-3">
                        <select className="form-select" id="new-category" required>
                            <option hidden value=''>Selecciona una categoría</option>
                            {categoryData && categoryData.getCategories.map(category => {
                                return <option 
                                    value={category.name} 
                                    key={category.sequence}
                                >
                                    {category.name}
                                </option>
                            })}
                        </select>
                        <label>Categoría</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="new-url" required />
                        <label>URL</label>
                    </div>
                    <div className="input-group mb-3">
                        <input type="file" className="form-control" id="new-image" required />
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn-danger btn" type="button" onClick={closeModal}>
                        Cancelar
                    </button>
                    <button className="btn-success btn" type="submit">
                        Crear Producto
                    </button>
                </div>
            </div>
        </form>
    }

    const openModal = () => {
        const modal = document.getElementById('create-modal')
        modal.style.display = 'block'
    }

    const closeModal = () => {
        const modal = document.getElementById('create-modal')
        modal.style.display = 'none'
    }

    if (loading) return <Loading text={'Productos'} />
    if (categoryLoading) return <Loading text={'Categorías'} />

    return <>
        <CreateModal />
        <button className="btn btn-primary mb-3" onClick={openModal} title="Agregar Producto">
            <i className="bi bi-plus-circle" />
        </button>
        <section className="row">
            {data && data.getProducts.map((producto, i) => {
                return <form key={i} className="product-form col-sm-12 col-lg-4" onSubmit={e => saveProduct(e, producto.id, i)}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id={`name-${i}`} defaultValue={producto.name} required />
                        <label>Nombre</label>
                    </div>
                    <div className="form-floating mb-3">
                        <select className="form-select" id={`formulator-${i}`} defaultValue={producto.formulator} required>
                            <option hidden value=''>Selecciona un formulador</option>
                            <option value="Symborg">Symborg</option>
                            <option value="Catawba">Catawba Enterprising</option>
                            <option value="ACP">Agro Correctores del Pacífico</option>
                            <option value="Fenecsa">Fenecsa</option>
                        </select>
                        <label>Formulador</label>
                    </div>
                    <div className="form-text">Para nuevas categorias se debe ir a la tab de Categorias.</div>
                    <div className="form-floating mb-3">
                        <select className="form-select" id={`category-${i}`} defaultValue={producto.category} required>
                            <option hidden value=''>Selecciona una categoría</option>
                            {categoryData && categoryData.getCategories.map(category => {
                                return <option 
                                    value={category.name} 
                                    key={category.sequence}
                                >
                                    {category.name}
                                </option>
                            })}
                        </select>
                        <label>Categoría</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id={`url-${i}`} defaultValue={producto.url} required />
                        <label>URL</label>
                    </div>
                    <div className="input-group mb-3">
                        <input type="file" className="form-control input-file" id={`image-${i}`} />
                        <label 
                            className="input-group-text pointer" title="Nombre foto actual"
                            onClick={() => window.open(producto.image, '_blank')}
                        >
                            <small>{producto.image.split('/')[producto.image.split('/').length - 1]}</small>
                        </label>
                    </div>
                    <button className="btn btn-sm btn-success mb-5 me-2" type="submit">Guardar</button>
                    <button 
                        className="btn btn-sm btn-danger mb-5" type="button" title="Eliminar Producto"
                        onClick={e => removeProduct(producto.id, producto.name)}>
                        <i className="bi bi-trash-fill" />
                    </button>
                </form>
            })}
        </section>
    </>
}

export default Productos

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
    mutation ($id: String!, $name: String!, $formulator: String!, $category: String!, $image: String!, $url: String!) {
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

const Productos = () => {
    
    const { loading, error, data, refetch } = useQuery(GET_PRODUCTOS)
    const { loading: categoryLoading, error: categoryError, data: categoryData } = useQuery(GET_CATEGORIES)

    error && console.log(error)
    categoryError && console.log(categoryError)

    const [editProduct] = useMutation(EDIT_PRODUCT, {
        onCompleted: ({ editProduct }) => {
            if (editProduct.result) {
                alert('Producto editado con éxito.')
                refetch()
            } else alert('Error al editar el producto. Inténtalo de nuevo.')
        },
        onError: error => {
            alert('Error al editar el producto. Inténtalo de nuevo.')
            console.log(error)
        }
    })

    const [deleteProduct] = useMutation(DELETE_PRODUCT, {
        onCompleted: ({ deleteProduct }) => {
            if (deleteProduct.result) {
                alert('Producto eliminado con éxito.')
                refetch()
            } else alert('Error al eliminar el producto. Inténtalo de nuevo.')
        },
        onError: error => {
            alert('Error al eliminar el producto. Inténtalo de nuevo.')
            console.log(error)
        }
    })

    const [createProduct] = useMutation(CREATE_PRODUCT, {
        onCompleted: ({ createProduct }) => {
            if (createProduct.result) {
                alert('Producto creado con éxito.')
                refetch()
            } else alert('Error al crear el producto. Inténtalo de nuevo.')
        },
        onError: error => {
            alert('Error al crear el producto. Inténtalo de nuevo.')
            console.log(error)
        }
    })

    const saveProduct = (e, id, i, img) => {
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
        }

        editProduct({ variables: { id, name, formulator, category, url, image: img } })
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
                            <option value="ACP">Agrocorrectores del Pacífico</option>
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
                    <div className="form-text">La imagen debe tener una dimensión de 500x650.</div>
                    <div className="input-group mb-3">
                        <input type="file" className="form-control" id="new-image" required />
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
        const modal = document.getElementById('create-modal')
        modal.style.display = 'block'
    }

    const closeModal = () => {
        const modal = document.getElementById('create-modal')
        modal.style.display = 'none'
    }

    if (loading) return <p>Cargando Productos...</p>
    if (categoryLoading) return <p>Cargando Categorias...</p>

    return <>
        <CreateModal />
        <button className="btn btn-primary mb-3 ms-3" onClick={openModal}>
            <span>Agregar Producto</span>
            <i className="bi bi-plus-circle ms-2" />
        </button>
        <section className="row" id="row-correction">
            {data && data.getProducts.map((producto, i) => {
                return <form 
                    key={i} 
                    className="product-form col-sm-12 col-lg-4" 
                    onSubmit={e => saveProduct(e, producto.id, i, producto.image)}
                >
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id={`name-${i}`} defaultValue={producto.name} required />
                        <label>Nombre</label>
                    </div>
                    <div className="form-floating mb-3">
                        <select className="form-select" id={`formulator-${i}`} defaultValue={producto.formulator} required>
                            <option hidden value=''>Selecciona un formulador</option>
                            <option value="Symborg">Symborg</option>
                            <option value="Catawba">Catawba Enterprising</option>
                            <option value="ACP">Agrocorrectores del Pacífico</option>
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
                    <div className="form-text">La imagen debe tener una dimensión de 500x650.</div>
                    <div className="input-group mb-3">
                        <input type="file" className="form-control" id={`image-${i}`} />
                        <label className="input-group-text" onClick={() => window.open(producto.image, '_blank')}>
                            Actual
                        </label>
                    </div>
                    <button className="btn btn-success mb-5 me-2" type="submit">Guardar</button>
                    <button className="btn btn-danger mb-5" type="button" onClick={e => removeProduct(producto.id, producto.name)}>
                        <i className="bi bi-trash-fill" />
                    </button>
                </form>
            })}
        </section>
    </>
}

export default Productos

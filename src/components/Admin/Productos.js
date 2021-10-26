import { useQuery, gql } from '@apollo/client'


const GET_CATEGORIES = gql`
    query getCategories {
        getCategories {
            name
            sequence
        }
    }
`

const GET_PRODUCTOS = gql`
    query {
        getProducts {
            name
            formulator
            category
            image
        }
    }
`

const Productos = () => {
    
    const { loading, error, data } = useQuery(GET_PRODUCTOS)
    const { loading: categoryLoading, error: categoryError, data: categoryData } = useQuery(GET_CATEGORIES)

    if (loading) return <p>Cargando Productos...</p>
    if (categoryLoading) return <p>Cargando Categorias...</p>

    error && console.log(error)
    categoryError && console.log(categoryError)

    const saveProduct = e => {
        e.preventDefault()
        console.log('Formulario enviado')
    }

    return <>
        {data && data.getProducts.map(producto => {
            return <form key={producto.name} className="product-form" onSubmit={saveProduct}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" defaultValue={producto.name} />
                    <label>Nombre</label>
                </div>
                <div className="form-floating mb-3">
                    <select className="form-select" defaultValue={producto.formulator}>
                        <option value="Symborg">Symborg</option>
                        <option value="Catawba">Catawba Enterprising</option>
                        <option value="ACP">Agrocorrectores del Pacífico</option>
                        <option value="Fenecsa">Fenecsa</option>
                    </select>
                    <label>Formulador</label>
                </div>
                <div className="form-text">Para nuevas categorias se debe ir a la tab de Categorias.</div>
                <div className="form-floating mb-3">
                    <select className="form-select" defaultValue={producto.category}>
                        {categoryData && categoryData.getCategories.map(category => {
                            return <option 
                                value={category.name} 
                                key={category.sequence}
                            >
                                {category.name}
                            </option>
                        })}
                    </select>
                    <label>Categoria</label>
                </div>
                <div className="form-text">La imagen debe tener una dimensión de 500x650.</div>
                <div className="input-group mb-3">
                    <input type="file" className="form-control" />
                    <label className="input-group-text" onClick={() => window.open(producto.image, '_blank')}>
                        Ver Imagen Actual
                    </label>
                </div>
                <button className="btn btn-success mb-5" type="submit">Guardar</button>
            </form>
        })}
    </>
}

export default Productos

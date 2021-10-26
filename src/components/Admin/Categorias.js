import { useQuery, gql } from '@apollo/client'


const GET_CATEGORIES = gql`
    query getCategories {
        getCategories {
            name
            sequence
        }
    }
`


const Productos = () => {
    
    const { loading, error, data } = useQuery(GET_CATEGORIES)

    if (loading) return <p>Cargando Categorias...</p>

    error && console.log(error)

    return <>
        <ul className="list-group">
            {data.getCategories.map(category => {
                return <li className="list-group-item" key={category.sequence}>
                    {category.name}
                </li>
            })}
            <li className="list-group-item">
                Nueva categoria
            </li>
        </ul>
    </>
}

export default Productos

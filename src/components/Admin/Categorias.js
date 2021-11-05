import { useState } from 'react'
import { useQuery, useMutation,  gql } from '@apollo/client'


const GET_CATEGORIES = gql`
    query {
        getCategories {
            id
            name
            sequence
        }
    }
`
const EDIT_CATEGORY = gql`
    mutation ($id: String!, $name: String!) {
        editCategory(id: $id, name: $name) {
            result
        }
    }
`

const CREATE_CATEGORY = gql`
    mutation ($name: String!) {
        createCategory(name: $name) {
            result
        }
    }
`

const DELETE_CATEGORY = gql`
    mutation ($id: String!) {
        deleteCategory(id: $id) {
            result
        }
    }
`

const Categorias = () => {
    
    const [focus, setFocus] = useState(0)
    const [name, setName] = useState('')
    const [newCategory, setNewCategory] = useState('')

    const { loading, error, data, refetch } = useQuery(GET_CATEGORIES, {
        fetchPolicy: 'cache-and-network'
    })

    error && console.log(error)

    const [editCategory] = useMutation(EDIT_CATEGORY, {
        onCompleted: ({ editCategory }) => {
            if (editCategory.result) {
                refetch()
                setFocus(0)
            } else 
                alert('Hubo un error al editar el nombre de la categoria. Inténtalo de nuevo.')
        },
        onError: ({ networkError: { result: { errors: err } } }) => {
            console.log(err[0].message)
            if (err[0].message.includes("'name':"))
                alert('Ya existe una categoria con ese nombre. Vuelve a intentarlo.')
            else alert('Hubo un error al editar el nombre de la categoria. Inténtalo de nuevo.')
        }
    })

    const [createCategory] = useMutation(CREATE_CATEGORY, {
        onCompleted: ({ createCategory }) => {
            if (createCategory.result) {
                refetch()
                setFocus(0)
                setNewCategory('')
            } else 
                alert('Hubo un error al crear la categoria. Inténtalo de nuevo.')
        },
        onError: ({ networkError: { result: { errors: err } } }) => {
            console.log(err[0].message)
            if (err[0].message.includes("'name':"))
                alert('Ya existe una categoria con ese nombre. Vuelve a intentarlo.')
            else alert('Hubo un error al crear la categoria. Inténtalo de nuevo.')
        }
    })

    const [deleteCategory] = useMutation(DELETE_CATEGORY, {
        onCompleted: ({ deleteCategory }) => {
            if (deleteCategory.result) {
                refetch()
                setFocus(0)
            } else 
                alert('Hubo un error al eliminar la categoria. Inténtalo de nuevo.')
        },
        onError: ({ networkError: { result: { errors: err } } }) => {
            console.log(err[0].message)
            alert('Hubo un error al eliminar la categoria. Inténtalo de nuevo.')
        }
    })

    const saveCategory = id => editCategory({ variables: { id, name } })

    const createNewCategory = () => createCategory({ variables: { name: newCategory } })

    const removeCategory = (id, name) => {
        if (window.confirm(`¿Deseas eliminar la categoria "${name}"?`))
            deleteCategory({ variables: { id } })
    }

    if (loading) return <p>Cargando Categorias...</p>
    
    return <>
        <ul className="list-group category-list">
            {data.getCategories.map(category => {
                return <li 
                    className="list-group-item category-input" 
                    key={category.sequence}
                    onClick={() => {
                        if (focus !== category.sequence)
                            setName(category.name)
                        setFocus(category.sequence)
                    }}
                >
                    {focus === category.sequence ? <>
                        <input 
                            type="text" className="form-control me-1" 
                            id={`category-${category.sequence}`}
                            onChange={e => setName(e.target.value)} value={name}
                        />
                        <i className="bi bi-check-circle" title="Guardar" onClick={() => saveCategory(category.id)} />
                    </> : <>
                        <span>{category.name}</span>
                        <i className="bi bi-trash" title="Eliminar" onClick={() => removeCategory(category.id, category.name)} />
                    </>}
                </li>
            })}
            <li className="list-group-item category-input">
                <input 
                    type="text" className="form-control me-1" placeholder="Nueva Categoria"
                    onChange={e => setNewCategory(e.target.value)} value={newCategory}
                />
                <i className="bi bi-check-circle" title="Guardar" onClick={createNewCategory} />
            </li>
        </ul>
    </>
}

export default Categorias

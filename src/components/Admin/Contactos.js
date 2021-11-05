import { useQuery, useMutation, gql } from "@apollo/client"


const GET_CONTACTS = gql`
    query  {
        getContacts {
            id
            name
            phone
            email
            message
        }
    }
`

const DELETE_CONTACT = gql`
    mutation ($id: String!) {
        deleteContact(id: $id) {
            result
        }
    }
`

const Contactos = () => {

    const { data, loading, refetch } = useQuery(GET_CONTACTS)

    const [deleteContact] = useMutation(DELETE_CONTACT, {
        onCompleted: ({ deleteContact }) => {
            if (deleteContact.result) refetch()
            else alert('Error al eliminar el contacto. Inténtalo de nuevo.')
        },
        onError: (error) => {
            console.log(error.message)
            alert('Error al eliminar el contacto. Inténtalo de nuevo.')
        }
    })

    const removeContact = (id, name) => {
        if (window.confirm(`¿Estas seguro que deseas eliminar la información de contacto de "${name}"?`))
            deleteContact({ variables: { id } })
    }

    return <>
        {loading ? <span>Cargando Contactos...</span> : <>
            <table className="table table-striped table-hover my-5">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col" className="col-2">Nombre</th>
                        <th scope="col" className="col-2">Teléfono</th>
                        <th scope="col" className="col-2">Email</th>
                        <th scope="col">Mensaje</th>
                        <th scope="col"><i className="bi bi-box-seam" /></th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.getContacts.map((contact, index) => {
                        return <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{contact.name}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.email}</td>
                            <td>{contact.message}</td>
                            <td>
                                <button 
                                    className="remove-contact" 
                                    onClick={() => removeContact(contact.id, contact.name)}
                                >
                                    <i className="bi bi-trash" />
                                </button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>}
    </>
}

export default Contactos

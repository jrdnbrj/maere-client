import { useEffect, useState } from 'react'
import { useQuery, gql } from "@apollo/client"


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

const Contactos = () => {


    const [contacts, setContacts] = useState()

    const { data: contactsData, loading: contactsLoading } = useQuery(GET_CONTACTS)

    useEffect(() => {
        setContacts(contactsData)
    }, [contactsData])

    return <>
        {contactsLoading ? <span>Cargando Contactos...</span> : <>
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
                    {contacts && contacts.getContacts.map((contact, index) => {
                        return <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{contact.name}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.email}</td>
                            <td>{contact.message}</td>
                            <td>
                                <button className="remove-contact" onClick={() => console.log('Elimar Contacto')}>
                                    <i className="bi-x-lg" />
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

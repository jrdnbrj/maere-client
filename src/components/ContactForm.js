import { createRef, useState } from 'react'
import { useQuery, useMutation, gql } from "@apollo/client"


const GET_CONTACT_INFO = gql`
    query {
        getContactInfo {
            title
            text
        }
    }
`

const CREATE_CONTACT = gql`
    mutation ($name: String, $email: String, $phone: String, $message: String) {
        createContact(name: $name, email: $email, phone: $phone, message: $message) {
            name
            email
            phone
            message
        }
    }
`

const ContactForm = () => {

    const name = createRef('')
    const email = createRef('')
    const phone = createRef('')
    const message = createRef('')

    const [messageForm, setMessageForm] = useState('')

    const { error, data } = useQuery(GET_CONTACT_INFO)
    const [createContact, { loading }] = useMutation(CREATE_CONTACT, {
        onCompleted: () => setMessageForm('El formulario fue enviado con éxito.'),
        onError: () => setMessageForm('Hubo un error al enviar el formulario.')
    })
    
    const saveContact = async (e) => {
        e.preventDefault()

        setMessageForm('')
        createContact({
            variables: {
                name: name.current.value,
                email: email.current.value,
                phone: phone.current.value,
                message: message.current.value,
            }
        })
    }

    error && console.error(error)

    return <>
        {data && <>
            <p>{data.getContactInfo[1].title}</p>
            <p>{data.getContactInfo[1].text}</p>
        </>}
        <form onSubmit={saveContact}>
            <div className="form-floating">
                <input ref={name} type="text" className="form-control" placeholder="Juan Mera" required />
                <label>Nombre</label>
            </div>
            <div className="form-floating">
                <input ref={phone} type="text" className="form-control" placeholder="0999999999" required />
                <label>Teléfono</label>
            </div>
            <div className="form-floating">
                <input  ref={email} type="email" className="form-control" placeholder="nombre@maere.com" required />
                <label>Correo Electrónico</label>
            </div>
            <div className="form-floating">
                <textarea  ref={message} type="text" className="form-control" placeholder="Escribe tu mensaje aquí" id="mensaje" required />
                <label>Mensaje</label>
            </div>
            <button type="submit" className="submit">
                {loading ? 
                    <div className="spinner-border spinner-border-sm text-light mx-3" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div> : <span>Enviar</span>
                }
            </button>
            {messageForm && <span className="contact-message">{messageForm}</span>}
        </form>
    </>
}

export default ContactForm

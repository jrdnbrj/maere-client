import { useState, useEffect } from 'react'
import { useQuery, useMutation, gql } from "@apollo/client"


const UPDATE_PASSWORD = gql`
    mutation ($password: String!, $newPassword: String!) {
        updatePassword(password: $password, newPassword: $newPassword) {
            response
        }
    }
`

const UPDATE_ADDRESS = gql`
    mutation ($address: String!) {
        editAddress(address: $address) {
            result
        }
    }
`

const Configuracion = ({ Loading }) => {

    const { data } = useQuery(gql`{ getAddress }`)

    const [updateAddress] = useMutation(UPDATE_ADDRESS, {
        onCompleted: ({ editAddress: { result } }) => {
            if (result)
                alert('✔️ Se guardó la dirección.')
            else alert('❌ Error al guardar la dirección. Vuelve a intentarlo.')
        },
        onError: ({ networkError: { result: { errors: err } } }) => {
            console.log(err[0].message)
            alert('❌ Error al guardar la dirección. Vuelve a intentarlo.')
        }
    })

    const [updatePassword] = useMutation(UPDATE_PASSWORD, {
        onCompleted: ({ updatePassword: { response } }) => {
            setChangingPassword(false)
            if (response === 'OK') {
                setPassword('')
                setNewPassword('')
                setNewPassword2('')
                alert('✔️ Se cambió la contraseña.')
            } else setError(response)
        },
        onError: ({ networkError: { result: { errors: err } } }) => {
            setChangingPassword(false)
            console.log(err[0].message)
            if (err[0].message.includes("'password':"))
                setError('❌ Ocurrió un error con el campo de la Contraseña. Inténtalo de nuevo.')
            if (err[0].message.includes("'new_password':"))
                setError('❌ Ocurrió un error con el campo de la nueva Contraseña. Inténtalo de nuevo.')
        }
    })

    const [error, setError] = useState('')

    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newPassword2, setNewPassword2] = useState('')

    const [passwordsValid, setPasswordsValid] = useState(true)
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [changingPassword, setChangingPassword] = useState(false)

    const [address, setAddress] = useState('')

    useEffect(() => {
        if (data)
            setAddress(data.getAddress)
    }, [data])

    const saveAddress = e => {
        e.preventDefault()
        updateAddress({ variables: { address } })
    }

    useEffect(() => {
        if (newPassword !== newPassword2) {
            setError('❌ Las contraseñas no coinciden.')
            setPasswordsValid(false)
        } else {
            setError('')
            setPasswordsValid(true)
        }
    }, [newPassword, newPassword2])

    const savePassword = e => {
        e.preventDefault()
        setError('')
        setChangingPassword(true)
        if (passwordsValid)
            updatePassword({ variables: { password, newPassword }})
        else {
            setError('❌ Las contraseñas no coinciden.')
            setChangingPassword(false)
        }
    }

    const seePassword = () => {
        const pass = document.getElementById('password-1')
        if (pass.type === 'password') {
            setPasswordVisible(true)
            document.getElementById('password-1').type = 'text'
            document.getElementById('password-2').type = 'text'
            document.getElementById('password-3').type = 'text'
        } else {
            setPasswordVisible(false)
            document.getElementById('password-1').type = 'password'
            document.getElementById('password-2').type = 'password'
            document.getElementById('password-3').type = 'password'
        }
    }

    return <>
        <form className="form-group" onSubmit={saveAddress}>
            <h1 className="display-6">Dirección</h1>
            <div className="form-floating mb-2">
                <input className="form-control" value={address} onChange={e => setAddress(e.target.value)} />
                <label>Dirección que aparecerá en el pie de página</label>
            </div>
            {changingPassword ?
                <button type="button" className="btn btn-success mb-1" disabled>
                    <div className="spinner-border spin me-2" role="status" />
                    <span>Changing Password</span>
                </button> : 
                <button className="btn btn-sm btn-success mb-3 me-2" type="submit">Guardar</button>
            }
        </form>
        <form onSubmit={savePassword}>
            <h1 className="display-6">Contraseña</h1>
            <div className="input-group">
                <input type="password" className="form-control" placeholder="Contraseña Actual" value={password} 
                    onChange={e => setPassword(e.target.value)} id="password-1" required />
                <input type="password" className="form-control" placeholder="Nueva Contraseña" value={newPassword} 
                    onChange={e => setNewPassword(e.target.value)} id="password-2" required />
                <input type="password" className="form-control" placeholder="Nueva Contraseña otra vez" value={newPassword2} 
                    onChange={e => setNewPassword2(e.target.value)} id="password-3" required />
                {passwordVisible ? 
                    <i className="bi bi-eye-slash" onClick={seePassword} /> : 
                    <i className="bi bi-eye" onClick={seePassword} />
                }
            </div>
            <div className="form-text">Tu contraseña debe tener entre 8 y 20 caracteres.</div>
            {changingPassword ?
                <button type="button" className="btn btn-sm btn-success mb-1" disabled>
                    <div className="spinner-border spin me-2" role="status" />
                    <span>Changing Password</span>
                </button> : 
                <button type="submit" className="btn btn-sm btn-success mb-1">
                    <span>Cambiar Contraseña</span>
                </button>
            }
            {error && <div className="alert alert-danger">{error}</div>}

        </form>
    </>
}

export default Configuracion

import { useState, useEffect } from 'react'
import { gql, useMutation } from '@apollo/client'

import Productos from '../components/Admin/Productos'
import Categorias from '../components/Admin/Categorias'
import Contactos from '../components/Admin/Contactos'
import Maere from '../components/Admin/Maere'
import Configuracion from '../components/Admin/Configuracion'

import logo from '../assets/img/logo_1.svg'


const LOGIN = gql`
    mutation ($password: String!) {
        login(password: $password) {
            token
            success
        }
    }
`

const Admin = () => {

    const [token, setToken] = useState(localStorage.getItem('token') || undefined)

    useEffect(() => {
        console.log('Token:', token)
    }, [token])

    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')

    const Loading = ({ text }) => {
        return (
            <div className="loading-text">
                <span>Cargando {text}...</span>
                <div className="spinner-border text-dark" />
            </div>
        )
    }

    const [loginAdmin] = useMutation(LOGIN, {
        onCompleted: ({ login: { token, success } }) => {
            if (success) {
                localStorage.setItem('token', token)
                setToken(token)
            } else
                setLoginError(token)

            setPassword('')
        },
        onError: error => {
            console.log(error)
            alert('Ocurrió un error tratando de iniciar sesión, vuelve a intentarlo.')
            setPassword('')
        }
    })

    const onChangePassword = (e) => {
        setLoginError('')
        setPassword(e.target.value)
    }

    const login = e => {
        e.preventDefault()
        loginAdmin({ variables: { password } })
    }

    const logout = () => {
        localStorage.removeItem('token')
        setToken(undefined)
    }

    if (token?.length > 20) 
        return (
            <div className="container mt-4 admin">
                <nav className="nav nav-pills nav-fill" role="tablist">
                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#nav-productos" type="button" role="tab" aria-controls="nav-productos" aria-selected="true">
                        Productos
                    </button>
                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-categorias" type="button" role="tab" aria-controls="nav-categorias" aria-selected="false">
                        Categorías
                    </button>
                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-contactos" type="button" role="tab" aria-controls="nav-contactos" aria-selected="false">
                        Contactos
                    </button>
                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-maere" type="button" role="tab" aria-controls="nav-maere" aria-selected="false">
                        Maere Info
                    </button>
                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-settings" type="button" role="tab" aria-controls="nav-settings" aria-selected="false">
                        Configuración
                    </button>
                    <button className="nav-link" type="button" onClick={logout} title="Cerrar Sesión">
                        <i className="bi bi-box-arrow-right" />
                    </button>
                </nav>
                <div className="tab-content mt-5" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-productos" role="tabpanel" aria-labelledby="nav-productoss-tab">
                        <Productos Loading={Loading} />
                    </div>
                    <div className="tab-pane fade" id="nav-categorias" role="tabpanel" aria-labelledby="nav-categorias-tab">
                        <Categorias Loading={Loading} />
                    </div>
                    <div className="tab-pane fade" id="nav-contactos" role="tabpanel" aria-labelledby="nav-contactos-tab">
                        <Contactos Loading={Loading} />
                    </div>
                    <div className="tab-pane fade" id="nav-maere" role="tabpanel" aria-labelledby="nav-maere-tab">
                        <Maere Loading={Loading} />
                    </div>
                    <div className="tab-pane fade" id="nav-settings" role="tabpanel" aria-labelledby="nav-settings-tab">
                        <Configuracion Loading={Loading} />
                    </div>
                </div>
            </div>
        )

    return (
        <div className="login-form">
            <img src={logo} className="admin-logo" alt="logo" />
            <form className="row g-3" id="row-correction" onSubmit={login}>
                <div className="col-auto">
                    <input 
                        type="password" className="form-control" placeholder="Contraseña" 
                        value={password} onChange={onChangePassword} 
                    />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">Iniciar Sesión</button>
                </div>
            </form>
            {loginError && <div className="alert alert-danger">{loginError}</div>}
        </div>
    )
}

export default Admin

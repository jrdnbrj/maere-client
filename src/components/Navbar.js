import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

import logo from '../assets/img/logo_1.svg'


const GET_CATEGORIES = gql`
    query getCategories {
        getCategories {
            name
            sequence
        }
    }
`

const Navbar = () => {

    const { data } = useQuery(GET_CATEGORIES)

    useEffect(() => {
        const autohide = document.querySelector('.autohide')
        let lastScroll = 0

        window.onscroll = e => {
            const currentScroll = document.documentElement.scrollTop

            if (lastScroll <= currentScroll) {
                if (currentScroll < 107)
                    autohide.classList.remove('navbar-sticky')
                else {
                    autohide.classList.remove('scrolled-up')
                    autohide.classList.add('scrolled-down')
                }
            } else {
                autohide.classList.remove('scrolled-down')
                autohide.classList.add('scrolled-up')
                autohide.classList.add('navbar-sticky')
            }
            
            lastScroll = currentScroll
        }
    })

    return <nav className="navbar navbar-container navbar-expand-lg bg-light autohide">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img src={logo} className="logo-nav" alt="Maere Logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <i className="bi bi-list" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <div className="btn-group">
                            <Link className="btn-sm nav-link" to="/productos">
                                Productos
                            </Link>
                            <button type="button" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                {data && <>
                                    {data.getCategories.map(category => {
                                        return <div key={category.sequence}>
                                            { category.sequence !== 1 && <hr className="dropdown-divider" /> }
                                            <li>
                                                <a href={`/productos#${category.name.split(' ')[0]}`} className="dropdown-item">
                                                    {category.name}
                                                </a>
                                            </li>
                                        </div>
                                    })}
                                </>}
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/nosotros">Nosotros</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contactos">Contactos</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}

export default Navbar

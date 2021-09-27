import { Link } from 'react-router-dom'

import logo from '../assets/img/logo_1.png'


const Navbar = () => {
    return <nav className="navbar navbar-container navbar-expand-lg bg-light">
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
                                <li><Link className="dropdown-item" to="/">Bioestumilantes</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/">Biofertilizante</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/">Biofertilizante</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/">Fertilizantes</Link></li>
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

import { Link } from 'react-router-dom'

import logo from '../assets/img/logo_1.png'


const Navbar = () => {
    return <nav className="navbar navbar-container navbar-expand-lg bg-light">
        <div className="container-fluid">
            <Link className="ms-5 navbar-brand" to="/">
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
                        <div class="btn-group">
                            <Link class="btn-sm nav-link" to="/">
                                Productos
                            </Link>
                            <button type="button" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <li><a class="dropdown-item" href="#">Bioestumilantes</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Biofertilizante</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Biofertilizante</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Fertilizantes</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Nosotros</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Contactos</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}

export default Navbar

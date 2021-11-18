import Productos from '../components/Admin/Productos'
import Categorias from '../components/Admin/Categorias'
import Contactos from '../components/Admin/Contactos'
import Maere from '../components/Admin/Maere'
import Configuracion from '../components/Admin/Configuracion'


const Admin = () => {

    const Loading = ({ text }) => {
        return (
            <div className="loading-text">
                <span>Cargando {text}...</span>
                <div className="spinner-border text-dark" />
            </div>
        )
    }

    return <div className="container mt-4 admin">
        <nav className="nav nav-pills nav-fill" role="tablist">
            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#nav-productos" type="button" role="tab" aria-controls="nav-productos" aria-selected="true">
                Productos
            </button>
            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-categorias" type="button" role="tab" aria-controls="nav-categorias" aria-selected="false">
                Categorias
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
}

export default Admin

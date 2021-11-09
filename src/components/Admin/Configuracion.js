const Configuracion = () => {
    return <form>
        <h1 className="display-6">Contraseña</h1>
        <div className="input-group">
            <input type="password" className="form-control" placeholder="Contraseña Actual" 
                id="password-1" required />
            <input type="password" className="form-control" placeholder="Nueva Contraseña" 
                id="password-2" required />
            <input type="password" className="form-control" placeholder="Nueva Contraseña Otra vez" 
                id="password-3" required />
            {/* {passwordVisible ? 
                <i className="bi bi-eye-slash" onClick={seePassword} /> : 
                <i className="bi bi-eye" onClick={seePassword} />
            } */}
        </div>
        <div className="form-text">Tu contraseña debe tener entre 8 y 20 caracteres.</div>
        {/* {changingPassword ? */}
            {/* <button type="button" className="btn btn-success mb-5" disabled>
                <div className="spinner-border spin me-2" role="status" />
                <span>Changing Password</span>
            </button> :  */}
            <button type="submit" className="btn btn-success mb-5">
                <span>Cambiar Contraseña</span>
            </button>
        {/* } */}
    </form>
}

export default Configuracion

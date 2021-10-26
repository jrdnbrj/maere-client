const Configuracion = () => {
    return <form>
        <h1 className="display-6">Password</h1>
        <div className="input-group">
            <input type="password" className="form-control" placeholder="Current Password" 
                id="password-1" required />
            <input type="password" className="form-control" placeholder="New Password" 
                id="password-2" required />
            <input type="password" className="form-control" placeholder="New Password Again" 
                id="password-3" required />
            {/* {passwordVisible ? 
                <i className="bi bi-eye-slash" onClick={seePassword} /> : 
                <i className="bi bi-eye" onClick={seePassword} />
            } */}
        </div>
        <div className="form-text">Your password must be 8-20 characters long.</div>
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

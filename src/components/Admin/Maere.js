const Maere = () => {
    return <section>
        <section>
            <h1 className="display-6">Carrusel</h1>
            <form>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="TU ALIADO EN PRODUCCIÓN AGRÍCOLA LIMPIA Y EFICIENTE" />
                    <label>Título</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="Nuestra misión es generar cultivos mas eficientes y limpios para un mundo con alimentos y agricultura consciente." />
                    <label>Texto</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" defaultValue="1" />
                    <label>Secuencia</label>
                </div>
                <div className="input-group mb-3">
                    <input type="file" className="form-control" />
                    <label 
                        className="input-group-text" 
                        onClick={() => window.open('http://localhost:8000/static/bananas.jpg', '_blank')}>
                        Ver Imagen Actual
                    </label>
                </div>
                <button className="btn btn-success mb-5">Guardar</button>
            </form>
            <form>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="TU ALIADO EN PRODUCCIÓN AGRÍCOLA LIMPIA Y EFICIENTE" />
                    <label>Título</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="Nuestra misión es generar cultivos mas eficientes y limpios para un mundo con alimentos y agricultura consciente." />
                    <label>Texto</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" defaultValue="2" />
                    <label>Secuencia</label>
                </div>
                <div className="input-group mb-3">
                    <input type="file" className="form-control" />
                    <label 
                        className="input-group-text" 
                        onClick={() => window.open('http://localhost:8000/static/frutas2.jpg', '_blank')}>
                        Ver Imagen Actual
                    </label>
                </div>
                <button className="btn btn-success mb-5">Guardar</button>
            </form>
            <form>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="TU ALIADO EN PRODUCCIÓN AGRÍCOLA LIMPIA Y EFICIENTE" />
                    <label>Título</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="Nuestra misión es generar cultivos mas eficientes y limpios para un mundo con alimentos y agricultura consciente." />
                    <label>Texto</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" defaultValue="3" />
                    <label>Secuencia</label>
                </div>
                <div className="input-group mb-3">
                    <input type="file" className="form-control" />
                    <label 
                        className="input-group-text" 
                        onClick={() => window.open('http://localhost:8000/static/campo2.jpg', '_blank')}>
                        Ver Imagen Actual
                    </label>
                </div>
                <button className="btn btn-success mb-5">Guardar</button>
            </form>
            <form>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="TU ALIADO EN PRODUCCIÓN AGRÍCOLA LIMPIA Y EFICIENTE" />
                    <label>Título</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="Nuestra misión es generar cultivos mas eficientes y limpios para un mundo con alimentos y agricultura consciente." />
                    <label>Texto</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" defaultValue="4" />
                    <label>Secuencia</label>
                </div>
                <div className="input-group mb-3">
                    <input type="file" className="form-control" />
                    <label 
                        className="input-group-text" 
                        onClick={() => window.open('http://localhost:8000/static/camarones.jpg', '_blank')}>
                        Ver Imagen Actual
                    </label>
                </div>
                <button className="btn btn-success mb-5">Guardar</button>
            </form>
        </section>   
        <section>
            <h1 className="display-6">Home</h1>
            <form>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="Revolucionamos la manera en la que desarrollas tus cultivos con resultados medibles" />
                    <label>Título</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="Con la asesoría de nuestros expertos en campo, garantizamos resultados medibles y crecimiento de producción a mediano y largo plazo en todas las áreas de producción agrícola en Ecuador." rows="3" />
                    <label>Texto</label>
                </div>
                <button className="btn btn-success mb-5">Guardar</button>
            </form>
        </section>
        <section>
            <h1 className="display-6">Productos</h1>
            <form>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="TU ALIADO EN PRODUCCIÓN AGRÍCOLA LIMPIA Y EFICIENTE" />
                    <label>Título</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="Nuestra misión es generar cultivos mas eficientes y limpios para un mundo con alimentos y agricultura consciente." rows="3" />
                    <label>Texto</label>
                </div>
                <button className="btn btn-success mb-5">Guardar</button>
            </form>
        </section>
        <section>
            <h1 className="display-6">Nosotros</h1>
            <form>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="¿QUIÉNES SOMOS?" />
                    <label>Título</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="Somos una empresa agrícola, enfocada en la introducción de productos innovadores para los cultivos, que permitan maximizar rendimientos de manera amigable con el medio ambiente." rows="3" />
                    <label>Texto</label>
                </div>
                <button className="btn btn-success mb-5">Guardar</button>
            </form>
            <form>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="¿Qué hacemos?" />
                    <label>Título</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="Proveemos a nuestros clientes de alternativas innovadoras y diferenciadas que le permitan obtener una alta rentabilidad en sus manejos y cuyos resultados sean sostenibles en el tiempo." rows="3" />
                    <label>Texto</label>
                </div>
                <button className="btn btn-success mb-5">Guardar</button>
            </form>
        </section>
        <section>
            <h1 className="display-6">Información de Contacto</h1>
            <form>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="¿QUIÉNES SOMOS?" />
                    <label>Título</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="Somos una empresa agrícola, enfocada en la introducción de productos innovadores para los cultivos, que permitan maximizar rendimientos de manera amigable con el medio ambiente." rows="3" />
                    <label>Texto</label>
                </div>
                <div className="input-group mb-3">
                    <input type="file" className="form-control" />
                    <label 
                        className="input-group-text" 
                        onClick={() => window.open('http://localhost:8000/static/campo.jpg', '_blank')}>
                        Ver Imagen Actual
                    </label>
                </div>
                <button className="btn btn-success mb-5">Guardar</button>
            </form>
            <form>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="Cualquiera que sea la pregunta, ¡estamos aquí para ayudar!" />
                    <label>Título</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" defaultValue="Recibirás las últimas noticias sobre nuestros productos y tips agrícolas de nueva generación." rows="3" />
                    <label>Texto</label>
                </div>
                <button className="btn btn-success mb-5">Guardar</button>
            </form>
        </section>
    </section>
}

export default Maere

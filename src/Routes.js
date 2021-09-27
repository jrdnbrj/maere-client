import { BrowserRouter, Switch, Route } from "react-router-dom"

import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Nosotros from "./pages/Nosotros"
import Contactos from "./pages/Contactos"


const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/nosotros" component={Nosotros} />
          <Route exact path="/contactos" component={Contactos} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes

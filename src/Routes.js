import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './pages/Layout'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Contactos from './pages/Contactos'
import Productos from './pages/Productos'
import Admin from './pages/Admin'


const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/nosotros' component={Nosotros} />
          <Route exact path='/contactos' component={Contactos} />
          <Route exact path='/productos' component={Productos} />
          <Route exact path='/admin' component={Admin} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes

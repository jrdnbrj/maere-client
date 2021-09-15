import { ApolloProvider } from '@apollo/client/react'
import client from './adapters/apolloClient';

import { Provider } from 'react-redux'
import store from './adapters/store'

import Routes from "./Routes";


function App() {
  return <ApolloProvider client={client}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </ApolloProvider>
}

export default App

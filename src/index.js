import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/styles.css'

import AOS from 'aos'
import 'aos/dist/aos.css'


AOS.init()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import toast from 'react-hot-toast'

import 'semantic-ui-css/semantic.min.css'
import './index.css'
import App from './App'

const rootElement = document.getElementById('root')
if (rootElement === null) {
  toast('Something went Wrong Please')
  throw new Error('Something went Wrong Please')
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

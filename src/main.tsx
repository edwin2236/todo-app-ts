import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from 'app/Root'
import 'app/core/assets/css/styles.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)

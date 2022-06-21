import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './styles.css'
import { YourDestinyApp } from './YourDestinyApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <YourDestinyApp />
    </BrowserRouter>
  </React.StrictMode>
)

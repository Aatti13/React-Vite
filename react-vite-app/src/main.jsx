import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import './App.css'
import './CSS-Files/AboutPage.css'
import './CSS-Files/ProgramPage.css'
import './CSS-Files/LoginPage.css'
import './CSS-Files/SubjectsPage.css'
import './CSS-Files/ContactPage.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

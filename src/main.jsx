import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UserLoginProvider } from "./contexts/userLogin.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserLoginProvider>
    <App />
    </UserLoginProvider>
    </BrowserRouter>
)
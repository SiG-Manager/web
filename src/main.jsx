import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter } from 'react-router-dom'
import App from './pages/App'
import "./assets/styles/main.css" 
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/styles/dark.css'
import './assets/styles/light.css'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
)

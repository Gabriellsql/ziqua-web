import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'
import App from './App.jsx'

AOS.init({
  duration: 800,    // duración en ms
  once: true,       // solo anima una vez al bajar
  easing: 'ease-out-cubic'
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
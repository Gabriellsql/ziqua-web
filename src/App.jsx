import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuienesSomos from './components/QuienesSomos'
import Servicios from './components/Servicios'
import ComoFunciona from './components/ComoFunciona'
import Tecnologia from './components/Tecnologia'
import ImpactoAmbiental from './components/ImpactoAmbiental'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
function App() {
  return (
    <div className="min-h-screen relative">
      <Background />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <QuienesSomos />
        <Servicios />
        <ComoFunciona />
        <Tecnologia />
        <ImpactoAmbiental />
        <Contacto />
        <Footer />
      </div>
    </div>
  )
}

export default App
import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuienesSomos from './components/QuienesSomos'
import Servicios from './components/Servicios'
import ComoFunciona from './components/ComoFunciona'

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
      </div>
    </div>
  )
}

export default App
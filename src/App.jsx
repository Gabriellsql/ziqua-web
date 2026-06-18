import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className="bg-gray-50 min-h-screen relative">
      <Background />
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default App
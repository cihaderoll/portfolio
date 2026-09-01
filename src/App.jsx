import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div id="top" className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
      <Header />
      <main className="mx-auto max-w-4xl px-6">
        <Hero />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App

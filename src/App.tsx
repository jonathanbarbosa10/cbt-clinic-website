import { Navbar } from "./components/layout/Navbar"
import { Hero } from "./components/sections/Hero"
import { Authority } from "./components/sections/Authority"
import { Methodology } from "./components/sections/Methodology"
import { AreasOfFocus } from "./components/sections/AreasOfFocus"
import { About } from "./components/sections/About"
import { FAQ } from "./components/sections/FAQ"
import { Contact } from "./components/sections/Contact"
import { Footer } from "./components/layout/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background font-body text-slate-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Authority />
        <Methodology />
        <AreasOfFocus />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

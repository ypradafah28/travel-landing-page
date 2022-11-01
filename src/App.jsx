import './index.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Destinasi from './components/destinasi'
import Wisata from './components/wisata'
import Transport from './components/transport'
import Company from './components/company'

function App() {
  return (
    <div className='bg-cyan-800 h-[200rem]'>
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <Destinasi />
        </section>
        <section>
          <Wisata />
        </section>
        <section>
          <Transport />
        </section>
        <section>
          <Company />
        </section>
      </main>
    </div>
  )
}

export default App

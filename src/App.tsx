import { AboutMe } from './components/About Me/AboutMe'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { HomeSection } from './components/HomeSection/HomeSection'
import { Portfolio } from './components/Portfolio/Portfolio'
import { MySkills } from './components/Skills/MySkills'
import Testimonials from './components/Testimonials/Testimonials'
import './index.css'

function App() {


  return (
    <body className='text-body'>
      <Header />
      <main className=''>
        <HomeSection />
        <MySkills />
        <AboutMe />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </body>
  )
}

export default App

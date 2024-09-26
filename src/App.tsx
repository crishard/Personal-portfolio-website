import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { HomeSection } from './components/HomeSection/HomeSection'
import { MySkills } from './components/Skills/MySkills'
import './index.css'

function App() {


  return (
    <body className='text-body'>
      <Header />
      <main className=''>
        <HomeSection />
        <MySkills />
      </main>
      <Footer />
    </body>
  )
}

export default App

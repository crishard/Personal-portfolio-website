import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { HomeSection } from './components/HomeSection/HomeSection'
import './index.css'

function App() {


  return (
    <body className='text-body'>
      <Header />
      <main className=''>
        <HomeSection />
      </main>
      <Footer />
    </body>
  )
}

export default App

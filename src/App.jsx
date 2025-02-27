import About from './about/About'
import './App.css'
import Experience from './experience/Experience'
import Footer from './footer/Footer'
import Hero from './hero-section/Hero'
import Navbar from './navbar/Navbar'
import Portfolio from './portfolio/Portfolio'

function App() {
  
  return (
    <>
      <div className='app-container'>
        <Navbar/>
        <Hero/>
        <About/>
        <Portfolio/>
        <Experience/>
        <Footer/>
      </div>
      <div className="media-alert">Please Open in Laptop</div>
    </>
  )
}

export default App

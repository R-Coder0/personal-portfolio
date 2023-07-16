import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Achivement from './components/achivement/Achivement'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
   <>
  <Header/>
  <Nav/>
  <About/>
  <Experience/>
  <Services/>
  <Portfolio/>
  <Achivement/>
  <Contact/>
  <Footer/>
   </>
  )
}

export default App

import React, { useState } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Achivement from './components/achivement/Achivement'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Alert from './components/alert/Alert'

function App() {
  const [alert,setAlert] = useState(null);
  const showAlert =  (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  } 

  return (
   <>
  <Header/>
  <Nav/>
  <About/>
  <Experience/>
  <Services/>
  <Portfolio/>
  <Achivement/>
  <Contact showAlert={showAlert}/>
  <Alert alert={alert}/>
  <Footer/>
   </>
  )
}

export default App

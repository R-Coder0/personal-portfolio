import React from 'react'
import './Header.css'
import Social from './Social'
import CTA from './CTA';
import ME from '../../assets/ME.jpg'


function Header() {
  return (
  <>
  <header>
    <div className="container header__container">
       <div className="head"> <h3>Hello I'm</h3>
        <h1>Rishabh</h1>
        <h4 className="text-light">
            A professional Front-End Developer & React Developer!!!

        </h4>
        <CTA/>
        <Social/>
        <a href="#contact" className="scroll__name">scroll down</a>
        </div>
     

        <div className="header__img">
           <img src={ME} alt="" />
          
        </div>
    </div>
  
  
    
            
   
  </header>
  </>
  )
}

export default Header

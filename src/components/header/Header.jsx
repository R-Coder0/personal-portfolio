import React from 'react'
import './Header.css'
import Social from './Social'
import CTA from './CTA';
import ME from '../../assets/ME.png'


function Header() {
  return (
  <>
  <header>
    <div className="container header__container">
       <div className="head"> <h5>Hii I'm</h5>
        <h1>Rishabh</h1>
        <h5 className="text-light">
            Frontend Developer
        </h5>
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

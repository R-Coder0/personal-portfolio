import React from 'react'
import './Nav.css'
import {AiFillHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BiBookAlt} from 'react-icons/bi'
import {TbCertificate} from 'react-icons/tb'
import {RiContactsBook2Line} from 'react-icons/ri'
import {BiCodeAlt} from 'react-icons/bi'
import {useState} from 'react';

function Nav() {
  const [activeNav, setActiveNav]  = useState('#');
  return (
   <>
   <nav>
    <a href="#" onClick={()=> setActiveNav('#')}  className={activeNav === '#' ? 'active':  ''}><AiFillHome/></a>
    <a href="#about" onClick={()=> setActiveNav('#about')}  className={activeNav === '#about' ? 'active':  ''}><BiUser/></a>
    <a href="#experience" onClick={()=> setActiveNav('#experience')}  className={activeNav === '#experience' ? 'active':  ''}><TbCertificate/></a>
    <a href="#services" onClick={()=> setActiveNav('#services')}  className={activeNav === '#services' ? 'active':  ''}><BiBookAlt/></a>
    <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')}  className={activeNav === '#portfolio' ? 'active':  ''}><BiCodeAlt/></a>
    <a href="#contact" onClick={()=> setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active':  ''}><RiContactsBook2Line/></a>
   </nav>
   </>
  )
}

export default Nav

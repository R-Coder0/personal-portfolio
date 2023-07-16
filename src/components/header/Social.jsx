import React from 'react'
import{FaLinkedinIn} from 'react-icons/fa'
import{BsGithub} from 'react-icons/bs'
import{BsStackOverflow} from 'react-icons/bs'

function Social() {
  return (
  <>
  <div className="Social">
    <a href="https://www.linkedin.com/in/rishabh-pratap-445b761a2" target="_blank"><FaLinkedinIn/></a>
    <a href="https://github.com/R-Coder0" target="_blank"><BsGithub/></a>
    <a href="https://stackoverflow.com/users/21003375/rishabh-pratap" target="_blank"><BsStackOverflow/></a>
  </div>

  </>
  )
}

export default Social

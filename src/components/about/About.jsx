import React from 'react'
import './About.css';
import ME2 from '../../assets/ME2.png'
import{FiAward} from 'react-icons/fi'
import{FiUsers} from 'react-icons/fi'
import{RiProjectorLine} from 'react-icons/ri'

function About() {
  return (
    <section id='about'>
        <h5>Get to Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
            <div className="about__me">
                <div className="about__img">
                    <img src={ME2} alt="" />
                </div>
            </div>
            <div className="about__content">
                <div className="about__cards">
                    <article className='about__article'>
                        <FiAward className='about__icon'/>
                        <h5>Experience</h5>
                        <small>1+ Years</small>
                    </article>

                    <article className='about__article'>
                        <FiUsers className='about__icon'/>
                        <h5>Clients</h5>
                        <small>10+ clients</small>
                    </article>

                    <article className='about__article'>
                        <RiProjectorLine className='about__icon'/>
                        <h5>projects</h5>
                        <small>20+ Projects</small>
                    </article>
                </div>

                <p className='about__description'>
                web devloper, with extensive knowledge and have some experience, work in web technologies, web-desgin and ux-desgin. delivering quality product.
                </p>
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>

    </section>
  )
}

export default About

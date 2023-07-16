import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
   <section id="experience">
    <h5>What Skill I Have</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
        <div className="experience__frontend">
            <h3>Frontend Devlopment</h3>
            <div className="experience__content">
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <h4>HTML</h4>
                    <small>experienced</small>
                </article>

                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <h4>CSS</h4>
                    <small>intermediate</small>
                </article>

                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <h4>BOOTSTRAP</h4>
                    <small>experienced</small>
                </article>

                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <h4>JAVASCRIPT</h4>
                    <small>intermediate</small>
                </article>

                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <h4>TAILWIND</h4>
                    <small>experienced</small>
                </article>  

                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <h4>REACT</h4>
                    <small>intermediate</small>
                </article>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Experience

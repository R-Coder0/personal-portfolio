import React from 'react'
import'./Services.css'
import {BsCheck2} from 'react-icons/bs'
function Services() {
  return (
   <section id="services">
    <h5>What I offer</h5>
    <h2>Services</h2>
    <div className="services__container container">
        <article className="service">
            <div className="services__head">
                <h3>UI/UX Design</h3>
            </div>
            <ul className="services__list">
                <li>
                    <BsCheck2 className='services__icon'/>
                    <p>User stories.</p>
                </li>

                <li>
                    <BsCheck2 className='services__icon'/>
                    <p>User flow charts, diagrams.</p>
                </li>

                <li>
                    <BsCheck2 className='services__icon'/>
                    <p>Wireframes.</p>
                </li>

                <li>
                    <BsCheck2 className='services__icon'/>
                    <p>Content strategy.</p>
                </li>

                <li>
                    <BsCheck2 className='services__icon'/>
                    <p>Information architecture.</p>
                </li>

                <li>
                    <BsCheck2 className='services__icon'/>
                    <p>Brand and design system development.</p>
                </li>

                <li>
                    <BsCheck2 className='services__icon'/>
                    <p>Design technology consulting.</p>
                </li>
            </ul>

        </article>

        <article className="service">
            <div className="services__head">
                <h3>Font-end Devlopment</h3>
            </div>
            <ul className="services__list">
                <li>
                    <BsCheck2 className='services__icon'/>
                    <p>Optimizing the user experience.</p>
                </li>

                <li>
                    <BsCheck2 className='services__icon'/>
                    <p>Using HTML, JavaScript and CSS to bring concepts to life.</p>
                </li>

                <li>
                    <BsCheck2 className='services__icon'/>
                    <p>Developing and maintaining the user interface.</p>
                </li>

                <li>
                    <BsCheck2 className='services__icon'/>
                    <p>Implementing design on mobile websites.</p>
                </li>

                <li>
                    <BsCheck2 className='services__icon'/>
                    <p>Creating tools that improve site interaction regardless of the browser.</p>
                </li>

                <li>
                    <BsCheck2 className='services__icon'/>
                    <p>Managing software workflow.</p>
                </li>

                <li>
                    <BsCheck2 className='services__icon'/>
                    <p>Following SEO best practices.</p>
                </li>

                <li>
                    <BsCheck2 className='services__icon'/>
                    <p>Fixing bugs and testing for usability.</p>
                </li>
            </ul>

        </article>


        <article className="service">
            <div className="services__head">
                <h3>Content Writing</h3>
            </div>
            <ul className="services__list">
                <li>
                    <BsCheck2 className='services__icon'/>
                    <p>TextMaster.</p>
                </li>

                <li>
                    <BsCheck2 className='services__icon'/>
                    <p>Rightly Written.</p>
                </li>

                <li>
                    <BsCheck2 className='services__icon'/>
                    <p>Rightly Written.</p>
                </li>

                <li>
                    <BsCheck2 className='services__icon'/>
                    <p>ContentWriters.</p>
                </li>

                <li>
                    <BsCheck2 className='services__icon'/>
                    <p>SEMrush Content Marketplace</p>
                </li>

                <li>
                    <BsCheck2 className='services__icon'/>
                    <p>Text Mercato.</p>
                </li>

                <li>
                    <BsCheck2 className='services__icon'/>
                    <p>SEO Butler.</p>
                </li>

                <li>
                    <BsCheck2 className='services__icon'/>
                    <p>Verblio.</p>
                </li>
            </ul>

        </article>
    </div>
   </section>
  )
}

export default Services

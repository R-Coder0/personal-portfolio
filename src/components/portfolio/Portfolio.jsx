import React from 'react'
import './Portfolio.css'
import img1 from '../../assets/portfolio1.png'
import img2 from '../../assets/portfolio2.png'
import img3 from '../../assets/portfolio3.png'
import img4 from '../../assets/weather-app.png'
import img5 from '../../assets/ecommerce.png'
import img6 from '../../assets/gymapp.png'

function Portfolio() {
  return (
   <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio__container">
        <article className='portfolio__item'>
            <div className="portfolio__image">
                <img src={img1} alt="" />
            </div>
            <h3>Responsive Blogging Website</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/R-Coder0/R-Coder-Bootstrap"  target="_blank"   rel="noreferrer" className="btn">Github</a>
            <a href="https://r-coder0.github.io/R-Coder-Bootstrap/" className="btn btn-primary" target="_blank"   rel="noreferrer">Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__image">
                <img src={img2} alt="" />
            </div>
            <h3>Responsive E-Learning Website</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/R-Coder0/JBHOST23"  target="_blank"   rel="noreferrer" className="btn">Github</a>
            <a href="https://r-coder0.github.io/JBHOST23/" className="btn btn-primary"  target="_blank"   rel="noreferrer">Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__image">
                <img src={img3} alt="" />
            </div>
            <h3>Responsive Digital-Marketing Website</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/R-Coder0/Digital-Marketing" className="btn"  target="_blank"   rel="noreferrer">Github</a>
            <a href="https://r-coder0.github.io/Digital-Marketing/" className="btn btn-primary"  target="_blank"   rel="noreferrer">Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__image">
                <img src={img4} alt="" />
            </div>
            <h3>Weather App</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/R-Coder0/Weather-app" className="btn"  target="_blank"   rel="noreferrer">Github</a>
            <a href="https://r-coder0.github.io/Weather-app/" className="btn btn-primary"  target="_blank"   rel="noreferrer">Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__image">
                <img src={img6} alt="" />
            </div>
            <h3>Gym website</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/R-Coder0/Gym-app" className="btn"  target="_blank"   rel="noreferrer">Github</a>
            <a href="https://r-coder0.github.io/Gym-app/" className="btn btn-primary"  target="_blank"   rel="noreferrer">Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__image">
                <img src={img5} alt="" />
            </div>
            <h3>E-commerce</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/R-Coder0/Shopclues-Bazzar.github.io" className="btn"  target="_blank"   rel="noreferrer">Github</a>
            <a href="https://r-coder0.github.io/Shopclues-Bazzar.github.io/" className="btn btn-primary"  target="_blank"   rel="noreferrer">Live Demo</a>
            </div>
        </article>
    </div>
   </section>
  )
}

export default Portfolio

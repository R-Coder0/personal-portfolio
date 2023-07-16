import React from "react";
import "./Achivement.css";
import C1 from "../../assets/certificate1.png";
import C4 from "../../assets/certificate4.png";
import C6 from "../../assets/certificate6.png";
import C7 from "../../assets/certificate7.png";

// import Swiper core and required modules
import {Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


function Achivement() {
  return (
    <section id="achivement">
      <h5>Certificate and Awards</h5>
      <h2>Achivement</h2>
      <Swiper className="container achivement__container"
           // install Swiper modules
           modules={[Pagination]}
           spaceBetween={40}
           slidesPerView={1}
           pagination={{ clickable: true }}
      >
        <SwiperSlide className="achivement">
          <div className="certificate__img">
            <img src={C1} alt="" />
          </div>
          <h5 className="certificate__name">Front-End Devlopment - HTML.</h5>
          <small className="organisation__name"> Great Learning Academy</small>
        </SwiperSlide>



        <SwiperSlide className="achivement">
          <div className="certificate__img">
            <img src={C6} alt="" />
          </div>
          <h5 className="certificate__name">
            Introduction to JavaScript.
          </h5>
          <small className="organisation__name">Great Learning Academy</small>
        </SwiperSlide>

        <SwiperSlide className="achivement">
          <div className="certificate__img">
            <img src={C7} alt="" />
          </div>
          <h5 className="certificate__name">
            Front-end Devlopment - CSS.
          </h5>
          <small className="organisation__name">Great Learning Academy</small>
        </SwiperSlide>
        <SwiperSlide className="achivement">
          <div className="certificate__img">
            <img src={C4} alt="" />
          </div>
          <h5 className="certificate__name">
            React JS.
          </h5>
          <small className="organisation__name">Great Learning Academy</small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Achivement;

import React from 'react'
import Slider from "react-slick";
import './slider.css'
import Banner1 from '../../../images/banner.jpg'
import Banner2 from '../../../images/banner4.jpg'
import Banner3 from '../../../images/jwel-banner.jpg'





const HomeSlider = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true,
    arrows: true,
  };



  return (
    <section className="homeSlider">
      <div className="container-fluid">
        <Slider {...settings} className='home_slider_Main'>
          <div className="item">
            <img src={Banner1} className="w-100"/>
          </div>
          <div className="item">
            <img src={Banner2} className="w-100"/>
          </div>
          <div className="item">
            <img src={Banner3} className="w-100"/>
          </div>
         
        </Slider>
      </div>
    </section>
  )
}

export default HomeSlider
import React from 'react'
import HomeSlider from './slider/HomeSlider'
import CategorySlider from '../Category-slider/CategorySlider'
import Cards from '../Cards/Cards'
import './Home.css'
import Products from '../Products/Products'
import PopularBanner from '../../images/popular-banner.jpg'
import Slider from "react-slick";





const Home = () => {


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay:3000
  };
  return (
    <>

      <HomeSlider />
      <CategorySlider />
      <Cards />

      <section className="homeProducts">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className="hd mb-0 mt-0">
              Popular Products
            </h2>
          </div>

          <div className="productRow">
            <div className="item">
              <Products />
            </div>
            <div className="item">
              <Products />
            </div>
            <div className="item">
              <Products />
            </div>
            <div className="item">
              <Products />
            </div>
            <div className="item">
              <Products />
            </div>
            <div className="item">
              <Products />
            </div>
            <div className="item">
              <Products />
            </div>
            <div className="item">
              <Products />
            </div>
            <div className="item">
              <Products />
            </div>
            <div className="item">
              <Products />
            </div>
          </div>
        </div>
      </section>



      <section className="homeProducts homeProductsRow2 pt-0">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className="hd mb-0 mt-0">
              Best Selling Products
            </h2>
          </div>
          <div className="row">
            <div className="col-md-3">
              <img src={PopularBanner} className="w-100 pr-5" />
            </div>
            <div className="col-md-9">
              <Slider {...settings} className='prodSlider'>
                <div className="item">
                  <Products />
                </div>
                <div className="item">
                  <Products />
                </div>
                <div className="item">
                  <Products />
                </div>
                <div className="item">
                  <Products />
                </div>
                <div className="item">
                  <Products />
                </div>
                <div className="item">
                  <Products />
                </div>
                <div className="item">
                  <Products />
                </div>
                <div className="item">
                  <Products />
                </div>
                <div className="item">
                  <Products />
                </div>
              </Slider>
            </div>
          </div>

        </div>
      </section>



      <section className="homeProducts homeProductsRow2 pt-0">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className="hd mb-0 mt-0">
              Inspired by your browsing history
            </h2>
          </div>
          <div className="row">

            <div className="col-md-12">
              <Slider {...settings} className='prodSlider'>
                <div className="item">
                  <Products />
                </div>
                <div className="item">
                  <Products />
                </div>
                <div className="item">
                  <Products />
                </div>
                <div className="item">
                  <Products />
                </div>
                <div className="item">
                  <Products />
                </div>
                <div className="item">
                  <Products />
                </div>
                <div className="item">
                  <Products />
                </div>
                <div className="item">
                  <Products />
                </div>
                <div className="item">
                  <Products />
                </div>
              </Slider>
            </div>
          </div>

        </div>
      </section>


   

      <Cards />
    



    </>
  )
}

export default Home
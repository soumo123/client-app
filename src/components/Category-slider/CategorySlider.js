import React,{useState} from 'react'
import Slider from "react-slick";
import './category-slider.css'
import MobileImage from '../../images/mobile.png'

const CategorySlider = () => {

const[itemBag,setItembag]=useState([

    "#f4e17d",
    "#e4aea3",
    "#d79ec0",
    "#99ccd7",
    "#8dcc74",
    "#b19133",
    "#d5cc83",
    "#43e47078",
    "#dc3545f7",
    "#725255f7"
])


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        autoplay:2000,
        centerMode:true
    };

    return (
        <>
            <div className="catSlideeSection">
                <div className="container-fluid">
                    <h2 className="hd">Feature Categories</h2>
                    <Slider {...settings} className='cat_slider_Main'>
                        {
                            itemBag.length !==0 && itemBag.map((item,index)=>{
                                return(
                                    <div className="item">
                                    <div className="info" style={{background:item}}>
                                        <img src={"https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100"} />
                                        <h5>Mobiles</h5>
                                        <p>25 items</p>
                                    </div>
                                </div>
                                )
                            })
                        }
                       
                        {/* <div className="item">
                            <div className="info">
                                <img src={"https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100"} />
                                <h5>Mobiles</h5>
                                <p>25 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src={"https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100"} />
                                <h5>Mobiles</h5>
                                <p>25 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src={"https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100"} />
                                <h5>Mobiles</h5>
                                <p>25 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src={"https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100"} />
                                <h5>Mobiles</h5>
                                <p>25 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src={"https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100"} />
                                <h5>Mobiles</h5>
                                <p>25 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src={"https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100"} />
                                <h5>Mobiles</h5>
                                <p>25 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src={"https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100"} />
                                <h5>Mobiles</h5>
                                <p>25 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src={"https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100"} />
                                <h5>Mobiles</h5>
                                <p>25 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src={"https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100"} />
                                <h5>Mobiles</h5>
                                <p>25 items</p>
                            </div>
                        </div> */}


                    </Slider>
                </div>
            </div>
        </>

    )
}

export default CategorySlider
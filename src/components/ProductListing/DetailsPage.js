import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Slider from "react-slick";
import Random from '../../images/uuuuuuuuuuuuuuuuu.jpg'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Products from '../Products/Products';

const DetailsPage = () => {
    const zoomslider = useRef()
    const [active, setActive] = useState()
    const [inputValue, setInputValue] = useState(0)
    const [activeTab, setActiveTab] = useState("0")
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
    };
    var settings1 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        autoplay: 3000
    };

    const goto = (index) => {
        alert(index)
    }

    const isActive = (act) => {
        setActive(act)
    }

    const plus = () => {
        setInputValue(inputValue + 1)
    }

    const minus = () => {
        if (inputValue === 0) {
            setInputValue(0)
        } else {
            setInputValue(inputValue - 1)
        }
    }
    return (

        <section className="detailsPage mb-5">
            <div className="breadcrumbWraooer mb-4">
                <div className='container-fluid'>
                    <ul className="breadcrumb breadcrumb2 mb-0">
                        <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#">Library</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ul>
                </div>

            </div>
            <div className='container detailsContainer pt-3 pb-3'>
                <div className='row'>
                    <div className='col-md-5 '>
                        <div className='productZoom'>
                            <InnerImageZoom zoomScale={1} zoomType="hover" src={"https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg?im=Resize=(1200,1200)"} />

                        </div>
                        <Slider {...settings} className='zoomSlider' ref={zoomslider}>
                            <div className='item'>
                                <img src={"https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg?im=Resize=(150,150)"} className="w-50" onClick={() => goto(0)} />
                            </div>
                            <div className='item'>
                                <img src={"https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg?im=Resize=(150,150)"} className="w-50" onClick={() => goto(1)} />
                            </div>
                            <div className='item'>
                                <img src={"https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg?im=Resize=(150,150)"} className="w-50" onClick={() => goto(2)} />
                            </div>
                            <div className='item'>
                                <img src={"https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg?im=Resize=(150,150)"} className="w-50" onClick={() => goto(3)} />
                            </div>
                            <div className='item'>
                                <img src={"https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-4-202305292130.jpg?im=Resize=(150,150)"} className="w-50" onClick={() => goto(4)} />
                            </div>

                        </Slider>
                    </div>
                    <div className='col-md-7 productInfo'>
                        <h1>Men's Wonder Sports Running,Walking & Gym Shoes</h1>
                        <div className='d-flex align-items-center mb-4'>

                            <Rating name="half-rating-read size-large" defaultValue={4} readOnly size="medium" />
                            <span className="text-lightss">(24 views)</span>
                        </div>
                        <div className='d-flex align-items-center priceSec'>
                            <span className="priceLarge">₹ 35</span>
                            <div className='ms-2 d-flex flex-column'>
                                <span className="text-org">25% off</span>
                                <span className='text-lightss old-price'>₹ 34</span>
                            </div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to</p>

                        <div className="productSize d-flex align-items-center">
                            <span className="">Size/ Weight : </span>
                            <ul className="list list-inline  mb-0 pl-4">
                                <li className="list-inline-item"><a className={`tag ${active === 0 ? 'active' : ""}`} onClick={() => isActive(0)}>50 g</a></li>
                                <li className="list-inline-item"><a className={`tag ${active === 1 ? 'active' : ""}`} onClick={() => isActive(1)}>100 g</a></li>
                                <li className="list-inline-item"><a className={`tag ${active === 2 ? 'active' : ""}`} onClick={() => isActive(2)}>150 g</a></li>
                                <li className="list-inline-item"><a className={`tag ${active === 3 ? 'active' : ""}`} onClick={() => isActive(3)}>200 g</a></li>
                                <li className="list-inline-item"><a className={`tag ${active === 4 ? 'active' : ""}`} onClick={() => isActive(4)}>250 g</a></li>


                            </ul>
                        </div>

                        <div className="addCartSection pt-4 pb-4 d-flex align-items-center">
                            <div className="conterSec mr-3">
                                <input type="number" value={inputValue} />
                                <span className="arrow plus" onClick={() => plus()}><ArrowDropUpIcon /></span>
                                <span className="arrow minus" onClick={() => minus()}><ArrowDropDownIcon /></span>

                            </div>



                            <Button variant="contained" style={{ height: "55px" }} className="addtocartbtn" size="large"><ShoppingCartOutlinedIcon />Add to cart</Button>



                            <Button variant="contained" style={{ height: "55px" }} className="addtocartbtn" size="large"><FavoriteBorderOutlinedIcon /></Button>


                        </div>

                    </div>
                </div>

                <div className="card mt-5 p-5 deatilsPageTabs">
                    <div className="customTabs">
                        <ul className="list list-inline">
                            <li className="list-inline-item">
                                <Button className={`${activeTab === "0" && "active"}`} onClick={() => setActiveTab("0")}>
                                    Description
                                </Button>

                            </li>
                            <li className="list-inline-item">
                                <Button className={`${activeTab === "1" && "active"}`} onClick={() => setActiveTab("1")}>
                                    Additional info
                                </Button>
                            </li>
                            <li className="list-inline-item">

                                <Button className={`${activeTab === "2" && "active"}`} onClick={() => setActiveTab("2")}>
                                    Reviews(4)
                                </Button>
                            </li>
                        </ul>

                        <br />

                        {
                            activeTab === "0" && (
                                <div className="tabContent">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web p</p>
                                    <h2>
                                        Technical Details
                                    </h2>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web p</p>
                                    <br />
                                    <h2>
                                        new detailssss
                                    </h2>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web p</p>

                                </div>
                            )
                        }

                        {
                            activeTab === "1" && (
                                <div className="tabContent">
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">First</th>
                                                    <th scope="col">Last</th>
                                                    <th scope="col">Handle</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td colspan="2">Larry the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            )
                        }

                        {
                            activeTab === "2" && (
                                <div className="tabContent">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h3>Cutomer reviews and questions</h3>
                                            <br />
                                            <div className="card p-4 reviewsCard flex-row">
                                                <div className='image'>
                                                    <div className="rounded-circle">
                                                        <img src="https://www.w3schools.com/howto/img_avatar.png" />
                                                    </div>
                                                    <span className="d-block text-center font-weight-bold">Soummya</span>
                                                </div>

                                                <div className="info ps-5">
                                                    <div className='d-flex align-items-center'>
                                                        <h5 className="">December 5 , 2022</h5>
                                                        <div className="ms-auto">

                                                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                                        </div>
                                                    </div>

                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="card p-4 reviewsCard flex-row">
                                                <div className='image'>
                                                    <div className="rounded-circle">
                                                        <img src="https://www.w3schools.com/howto/img_avatar.png" />
                                                    </div>
                                                    <span className="d-block text-center font-weight-bold">Soummya</span>
                                                </div>

                                                <div className="info ps-5">
                                                    <div className='d-flex align-items-center'>
                                                        <h5 className="">December 5 , 2022</h5>
                                                        <div className="ms-auto">

                                                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                                        </div>
                                                    </div>

                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="card p-4 reviewsCard flex-row">
                                                <div className='image'>
                                                    <div className="rounded-circle">
                                                        <img src="https://www.w3schools.com/howto/img_avatar.png" />
                                                    </div>
                                                    <span className="d-block text-center font-weight-bold">Soummya</span>
                                                </div>

                                                <div className="info ps-5">
                                                    <div className='d-flex align-items-center'>
                                                        <h5 className="">December 5 , 2022</h5>
                                                        <div className="ms-auto">

                                                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                                        </div>
                                                    </div>

                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="card p-4 reviewsCard flex-row">
                                                <div className='image'>
                                                    <div className="rounded-circle">
                                                        <img src="https://www.w3schools.com/howto/img_avatar.png" />
                                                    </div>
                                                    <span className="d-block text-center font-weight-bold">Soummya</span>
                                                </div>

                                                <div className="info ps-5">
                                                    <div className='d-flex align-items-center'>
                                                        <h5 className="">December 5 , 2022</h5>
                                                        <div className="ms-auto">

                                                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                                        </div>
                                                    </div>

                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                                                    </p>
                                                </div>
                                            </div>

                                            <br />
                                            <br />

                                            <form className="reviewForm">
                                                <h4>Add a review</h4>
                                                <div class="form-group">
                                                    <textarea class="form-control" placeholder='Write a review...'></textarea>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div class="form-group">
                                                            <input type="text" className="form-control" placeholder='Enter Name' />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div class="form-group">
                                                            <input type="text" className="form-control" placeholder='Enter email' />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <input class="form-control" type="file" id="formFile" />
                                                </div>
                                                <div class="form-group">
                                                    <Button variant="contained" style={{ height: "55px" }} className="addtocartbtn" size="large">Submit review</Button>
                                                </div>
                                            </form>


                                        </div>
                                        <div className="col-md-4 pl-5">
                                            <h4>Customer Reviews</h4>

                                            <div className="d-flex align-items-center mt-2">

                                                <Rating name="half-rating-read" defaultValue={4.8} precision={0.5} readOnly />
                                                <strong className="ms-3">4.8 out of 5</strong>
                                            </div>
                                            <br />


                                            <div className="progressbarBox d-flex align-items-center">
                                                <span className="me-3">5 star</span>
                                                <div className="progress" style={{ width: "85%", height: "20px" }}>
                                                    <div className="progress-bar bg-success" style={{ width: "75%", height: "20px" }}>70%</div>
                                                </div>
                                            </div>

                                            <div className="progressbarBox d-flex align-items-center">
                                                <span className="me-3">4 star</span>
                                                <div className="progress" style={{ width: "85%", height: "20px" }}>
                                                    <div className="progress-bar bg-success" style={{ width: "65%", height: "20px" }}>60%</div>
                                                </div>
                                            </div>

                                            <div className="progressbarBox d-flex align-items-center">
                                                <span className="me-3">3 star</span>
                                                <div className="progress" style={{ width: "55%", height: "20px" }}>
                                                    <div className="progress-bar bg-success" style={{ width: "75%", height: "20px" }}>50%</div>
                                                </div>
                                            </div>

                                            <div className="progressbarBox d-flex align-items-center">
                                                <span className="me-3">2 star</span>
                                                <div className="progress" style={{ width: "45%", height: "20px" }}>
                                                    <div className="progress-bar bg-success" style={{ width: "45%", height: "20px" }}>40%</div>
                                                </div>
                                            </div>

                                            <div className="progressbarBox d-flex align-items-center">
                                                <span className="me-3">1 star</span>
                                                <div className="progress" style={{ width: "35%", height: "20px" }}>
                                                    <div className="progress-bar bg-success" style={{ width: "35%", height: "20px" }}>70%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        }

                    </div>
                </div>


                <div className='reatlatedProductTabs pt-5 pt-4'>
                    <h2 className="hd mb-0 mt-0">Realted Products</h2>
                    <br />
                    <Slider {...settings1} className='prodSlider'>
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


        </section>


    )
}

export default DetailsPage
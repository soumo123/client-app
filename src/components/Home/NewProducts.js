import React from 'react'
import Carousels from "react-elastic-carousel";
import Item from "../../Item";
import Logo from '../../images/product01.png'


const NewProducts = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 2 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 5 },
        { width: 1200, itemsToShow: 5 }
    ];
    return (
        <>
            <div className="col-md-12">
                <div className="row">
                    <div className="products-tabs">
                        <div id="tab1" className="tab-pane active">
                            <Carousels breakPoints={breakPoints}>
                                <Item>
                                    <div className="product">
                                        <div className="product-img">
                                            <img src={Logo} alt="" />
                                            <div className="product-label">
                                                <span className="sale">-30%</span>
                                                <span className="new">NEW</span>
                                            </div>
                                        </div>
                                        <div className="product-body">
                                            <p className="product-category">Category</p>
                                            <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                            <div className="product-rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="product-btns">
                                                <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                                                <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                                                <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                                            </div>
                                        </div>
                                        <div className="add-to-cart">
                                            <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                                        </div>
                                    </div>
                                </Item>
                                <Item>
                                    <div className="product">
                                        <div className="product-img">
                                            <img src={Logo} alt="" />
                                            <div className="product-label">
                                                <span className="sale">-30%</span>
                                                <span className="new">NEW</span>
                                            </div>
                                        </div>
                                        <div className="product-body">
                                            <p className="product-category">Category</p>
                                            <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                            <div className="product-rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="product-btns">
                                                <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                                                <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                                                <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                                            </div>
                                        </div>
                                        <div className="add-to-cart">
                                            <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                                        </div>
                                    </div>
                                </Item>
                                <Item>
                                    <div className="product">
                                        <div className="product-img">
                                            <img src={Logo} alt="" />
                                            <div className="product-label">
                                                <span className="sale">-30%</span>
                                                <span className="new">NEW</span>
                                            </div>
                                        </div>
                                        <div className="product-body">
                                            <p className="product-category">Category</p>
                                            <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                            <div className="product-rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="product-btns">
                                                <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                                                <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                                                <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                                            </div>
                                        </div>
                                        <div className="add-to-cart">
                                            <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                                        </div>
                                    </div>

                                </Item>
                                <Item>
                                    <div className="product">
                                        <div className="product-img">
                                            <img src={Logo} alt="" />
                                            <div className="product-label">
                                                <span className="sale">-30%</span>
                                                <span className="new">NEW</span>
                                            </div>
                                        </div>
                                        <div className="product-body">
                                            <p className="product-category">Category</p>
                                            <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                            <div className="product-rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="product-btns">
                                                <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                                                <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                                                <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                                            </div>
                                        </div>
                                        <div className="add-to-cart">
                                            <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                                        </div>
                                    </div>

                                </Item>
                                <Item>
                                    <div className="product">
                                        <div className="product-img">
                                            <img src={Logo} alt="" />
                                            <div className="product-label">
                                                <span className="sale">-30%</span>
                                                <span className="new">NEW</span>
                                            </div>
                                        </div>
                                        <div className="product-body">
                                            <p className="product-category">Category</p>
                                            <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                            <div className="product-rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="product-btns">
                                                <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                                                <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                                                <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                                            </div>
                                        </div>
                                        <div className="add-to-cart">
                                            <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                                        </div>
                                    </div>

                                </Item>
                                <Item>
                                    <div className="product">
                                        <div className="product-img">
                                            <img src={Logo} alt="" />
                                            <div className="product-label">
                                                <span className="sale">-30%</span>
                                                <span className="new">NEW</span>
                                            </div>
                                        </div>
                                        <div className="product-body">
                                            <p className="product-category">Category</p>
                                            <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                            <div className="product-rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="product-btns">
                                                <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                                                <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                                                <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                                            </div>
                                        </div>
                                        <div className="add-to-cart">
                                            <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                                        </div>
                                    </div>

                                </Item>
                                <Item>
                                    <div className="product">
                                        <div className="product-img">
                                            <img src={Logo} alt="" />
                                            <div className="product-label">
                                                <span className="sale">-30%</span>
                                                <span className="new">NEW</span>
                                            </div>
                                        </div>
                                        <div className="product-body">
                                            <p className="product-category">Category</p>
                                            <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                            <div className="product-rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="product-btns">
                                                <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                                                <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                                                <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                                            </div>
                                        </div>
                                        <div className="add-to-cart">
                                            <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                                        </div>
                                    </div>

                                </Item>
                            </Carousels>
                            <div id="slick-nav-1" className="products-slick-nav"></div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default NewProducts
import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import Products from '../Products/Products'
import Button from '@mui/material/Button';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';

const Listing = () => {
    const [isDropDownOpen, setISDropDownOpen] = useState(false)
    const [isDropDownOpen2, setISDropDownOpen2] = useState(false)


    return (
        <>

            <section className="listingPage">
                <div className="container-fluid" >
                    <div className="braedcrumb flex-column">
                        <h1>Cloths</h1>
                        <ul className="list list-inline mb-0">
                            <li className="list-inline-item">
                                <Link to="">Home</Link>

                            </li>
                            <li className="list-inline-item">
                                <Link to="">Shop</Link>

                            </li>
                            <li className="list-inline-item">
                                <Link to="">Cloths</Link>

                            </li>
                        </ul>
                    </div>

                    <div className="listingData">
                        <div className="row">
                            <div className="col-md-3 sidebarWrapper ">
                                <Sidebar />
                            </div>
                            <div className="col-md-9 rightContent homeProducts pt-0">

                                <div className="topStrip d-flex align-items-center">
                                    <p className="mb-0">We found <span className="text-success">29</span>products for you</p>
                                    <div className="d-flex align-items-center ms-auto">
                                        < div className="_tab position-relative">
                                            <Button className="btn_" onClick={() => setISDropDownOpen(!isDropDownOpen)}>
                                                <GridViewOutlinedIcon/>Show : 50
                                            </Button>
                                            {
                                                isDropDownOpen ? (
                                                    <ClickAwayListener onClickAway={() => setISDropDownOpen(false)}>
                                                        <ul className="dropdownMenu">
                                                            <li><Button className="align-items-center">50</Button></li>
                                                            <li><Button className="align-items-center">100</Button></li>
                                                            <li><Button className="align-items-center">150</Button></li>
                                                            <li><Button className="align-items-center">200</Button></li>
                                                            <li><Button className="align-items-center">250</Button></li>

                                                        </ul>
                                                    </ClickAwayListener>
                                                ) : ""}
                                        </div>
                                        < div className="_tab ms-3 position-relative">

                                            <Button className="btn_" onClick={() => setISDropDownOpen2(!isDropDownOpen2)}>
                                               <FilterListOutlinedIcon/> Sort By
                                            </Button>
                                            {
                                                isDropDownOpen2 ? (
                                                    <ClickAwayListener onClickAway={() => setISDropDownOpen2(false)}>
                                                        <ul className="dropdownMenu">

                                                            <li><Button className="align-items-center">Bestselling  </Button></li>
                                                            <li><Button className="align-items-center">Price: Low to High</Button></li>
                                                            <li><Button className="align-items-center">Price: High to Low</Button></li>
                                                            <li><Button className="align-items-center">Avg. Customer Review</Button></li>
                                                            <li><Button className="align-items-center">Newest Arrivals</Button></li>


                                                        </ul>
                                                    </ClickAwayListener>
                                                ) : ""}
                                        </div>
                                    </div>
                                </div>


                                <div className="productRow pl-4 pr-3">
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
                        </div>
                    </div>


                </div>
            </section>
        </>

    )
}

export default Listing
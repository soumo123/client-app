import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import GridViewIcon from '@mui/icons-material/GridView';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WomenShopping from '../../../images/women-shopping.png'

const HeaderNav = () => {
    return (
        <div className="nav d-flex align-items-center">
            <div className="container-fluid">
                <div className="row position-relative">
                    <div className="col-sm-2 part1 d-flex align-items-center">
                        <Button className="button-color catTab"><GridViewIcon />&nbsp;Browse All Categories <ArrowDropDownIcon /></Button>
                    </div>
                    <div className="col-sm-8 part2 position-static">
                        <nav>
                            <ul className="list list-inline mb-0">
                                <li className="list-inline-item position-static">
                                    <Button className=""><Link to="/today-deals">Deals</Link></Button>
                                    <div className="dropdown_menu megaMenu w-100">
                                        <div className="row">
                                            <div className="col">
                                                <h4 className="text-g">Shirts</h4>
                                                <ul className='mt-2 mb-0 '>
                                                    <li><Link to="#">T-Shirts</Link></li>
                                                    <li><Link to="#">Collar Shirts</Link></li>
                                                    <li><Link to="#">Polo Shirts</Link></li>
                                                    <li><Link to="#">Casual Shirts</Link></li>
                                                    <li><Link to="#">Formal Shirts</Link></li>
                                                    <li><Link to="#">Sleeveless Shirts</Link></li>


                                                </ul>
                                            </div>
                                            <div className="col">
                                               <h4 className="text-g">Trousers</h4>
                                               <ul className='mt-2 mb-0'>
                                                    <li><Link to="#">T-Shirts</Link></li>
                                                    <li><Link to="#">Collar Shirts</Link></li>
                                                    <li><Link to="#">Polo Shirts</Link></li>
                                                    <li><Link to="#">Casual Shirts</Link></li>
                                                    <li><Link to="#">Formal Shirts</Link></li>
                                                    <li><Link to="#">Sleeveless Shirts</Link></li>


                                                </ul>
                                            </div>
                                            <div className="col">
                                                <h4 className="text-g">Jeans</h4>
                                                <ul className='mt-2 mb-0'>
                                                    <li><Link to="#">T-Shirts</Link></li>
                                                    <li><Link to="#">Collar Shirts</Link></li>
                                                    <li><Link to="#">Polo Shirts</Link></li>
                                                    <li><Link to="#">Casual Shirts</Link></li>
                                                    <li><Link to="#">Formal Shirts</Link></li>
                                                    <li><Link to="#">Sleeveless Shirts</Link></li>


                                                </ul>
                                            </div>
                                            <div className="col">
                                               <img src={WomenShopping} className="w-100"/>
                                            </div>
                                        </div>
                                       
                                    </div>

                                </li>
                                <li className="list-inline-item">
                                    <Button className=""><Link to="/services">Customer Services</Link></Button>

                                </li>
                                <li className="list-inline-item">
                                    <Button className=""><Link to="/sales">Sales</Link></Button>

                                </li>
                                <li className="list-inline-item">
                                    <Button className=""><Link to="/new-releases">New Releases</Link></Button>
                                    
                                </li>
                                <li className="list-inline-item position-static">
                                    <Button className=""><Link to="/new-releases">Womens  <ArrowDropDownIcon /></Link></Button>
                                    <div className="dropdown_menu megaMenu w-100">
                                        <div className="row">
                                            <div className="col">
                                                <h4 className="text-g">Shirts</h4>
                                                <ul className='mt-2 mb-0 '>
                                                    <li><Link to="#">T-Shirts</Link></li>
                                                    <li><Link to="#">Collar Shirts</Link></li>
                                                    <li><Link to="#">Polo Shirts</Link></li>
                                                    <li><Link to="#">Casual Shirts</Link></li>
                                                    <li><Link to="#">Formal Shirts</Link></li>
                                                    <li><Link to="#">Sleeveless Shirts</Link></li>


                                                </ul>
                                            </div>
                                            <div className="col">
                                               <h4 className="text-g">Trousers</h4>
                                               <ul className='mt-2 mb-0'>
                                                    <li><Link to="#">T-Shirts</Link></li>
                                                    <li><Link to="#">Collar Shirts</Link></li>
                                                    <li><Link to="#">Polo Shirts</Link></li>
                                                    <li><Link to="#">Casual Shirts</Link></li>
                                                    <li><Link to="#">Formal Shirts</Link></li>
                                                    <li><Link to="#">Sleeveless Shirts</Link></li>


                                                </ul>
                                            </div>
                                            <div className="col">
                                                <h4 className="text-g">Jeans</h4>
                                                <ul className='mt-2 mb-0'>
                                                    <li><Link to="#">T-Shirts</Link></li>
                                                    <li><Link to="#">Collar Shirts</Link></li>
                                                    <li><Link to="#">Polo Shirts</Link></li>
                                                    <li><Link to="#">Casual Shirts</Link></li>
                                                    <li><Link to="#">Formal Shirts</Link></li>
                                                    <li><Link to="#">Sleeveless Shirts</Link></li>


                                                </ul>
                                            </div>
                                            <div className="col">
                                               <img src={WomenShopping} className="w-100"/>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <Button className=""><Link to="/new-releases">Mens  <ArrowDropDownIcon /></Link></Button>
                                    <div className="dropdown_menu">
                                        <ul>
                                            <li><Button className=""><Link to="/">Casual Shirts</Link></Button></li>
                                            <li> <Button className=""><Link to="/">Formal Shirts</Link></Button></li>
                                            <li>  <Button className=""><Link to="/">Trousers</Link></Button></li>
                                            <li> <Button className=""><Link to="/">T-Shirts</Link></Button></li>
                                            <li>  <Button className=""><Link to="/">Kurtas</Link></Button></li>
                                            <li> <Button className=""><Link to="/">Punjabis</Link></Button></li>
                                            <li> <Button className=""><Link to="/">Ethnic Jackets</Link></Button></li>

                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-sm-2 part3">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderNav
import React from 'react'
import { Link } from 'react-router-dom'
import './product.css'
import Product1 from '../../images/product01.png'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Products = () => {
    return (
        <div className="productThumb">
            <div className="badge">
                Hot

            </div>
            <span className="whishlist-icon" data-toggle="tooltip" data-placement="top" title="Whishlist">
                <FavoriteBorderOutlinedIcon />
            </span>
            <Link to="">
                <div className="imageWrapper">
                    <img src={Product1} className="w-100" />
                </div>

            </Link>

            <div className="info">
                <span className="d-block catName">
                    Electronics
                </span>
                <h4 className="title">
                    <Link to="">Lenovo V15 AMD Ryzen 3 Quad Core 7320U - (8 GB/512 GB SSD/Windows 11 Home) V15 G4 Thin and Light Lapto...</Link>
                </h4>
                <Rating name="half-rating" defaultValue={4.5} precision={0.5} readOnly />
                <span className="brand d-block">
                    Delivered Withing <a className="days-color">
                        5 Days
                    </a>
                </span>
                <div className="d-flex align-items-center mt-3">
                    <div className="d-flex align-items-center">
                        <span className="price font-weight-bold">
                            ₹ 20000
                        </span>
                        <span className="oldPrice">
                            ₹ 30000
                        </span>
                    </div>
                    <Button className="bg-g ml-auto transition"><ShoppingCartOutlinedIcon /> Add</Button>
                </div>
            </div>
        </div>
    )
}

export default Products
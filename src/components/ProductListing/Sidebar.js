import React from 'react'
import CategoryIcon from '@mui/icons-material/Category';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom'


function valuetext(value) {
    return `${value}°C`;
}


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Sidebar = () => {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className="sidebar">

                <div className="card border-0 shadow">
                    <h3>Category</h3>
                    <div className="catList">
                        <div className="catItem d-flex align-items-center">
                            <span className="img">
                                <CategoryIcon />
                            </span>
                            <h4 className="mb-0 ml-3 mr-3">Category 1</h4>
                            <span className="d-flex justify-content-center align-items-center rounded-circle ms-auto">30</span>
                        </div>
                        <div className="catItem d-flex align-items-center">
                            <span className="img">
                                <CategoryIcon />
                            </span>
                            <h4 className="mb-0 ml-3 mr-3">Category 1</h4>
                            <span className="d-flex justify-content-center align-items-center rounded-circle ms-auto">30</span>
                        </div>
                        <div className="catItem d-flex align-items-center">
                            <span className="img">
                                <CategoryIcon />
                            </span>
                            <h4 className="mb-0 ml-3 mr-3">Category 1</h4>
                            <span className="d-flex justify-content-center align-items-center rounded-circle ms-auto">30</span>
                        </div>
                        <div className="catItem d-flex align-items-center">
                            <span className="img">
                                <CategoryIcon />
                            </span>
                            <h4 className="mb-0 ml-3 mr-3">Category 1</h4>
                            <span className="d-flex justify-content-center align-items-center rounded-circle ms-auto">30</span>
                        </div>
                        <div className="catItem d-flex align-items-center">
                            <span className="img">
                                <CategoryIcon />
                            </span>
                            <h4 className="mb-0 ml-3 mr-3">Category 1</h4>
                            <span className="d-flex justify-content-center align-items-center rounded-circle ms-auto">30</span>
                        </div>
                        <div className="catItem d-flex align-items-center">
                            <span className="img">
                                <CategoryIcon />
                            </span>
                            <h4 className="mb-0 ml-3 mr-3">Category 1</h4>
                            <span className="d-flex justify-content-center align-items-center rounded-circle ms-auto">30</span>
                        </div>
                    </div>


                </div>

                <div className="card border-0 shadow">
                    <h3>Filter by price</h3>
                    <Slider
                        min={0}
                        step={1}
                        max={10000}
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}

                    />

                    <div className="d-flex pt-2 pb-2 priceRange">
                        <span>
                            From: <strong className="text-success">₹ {value[0]}</strong>

                        </span>
                        <span className="ms-auto">
                            To: <strong className="text-success">₹ {value[1]}</strong>
                        </span>
                    </div>

                    <div className="filters">
                        <h5>Colors</h5>
                        <ul>
                            <li>  <Checkbox {...label} style={{ color: "#c7c52a" }} />Red (56)</li>
                            <li>  <Checkbox {...label} style={{ color: "#c7c52a" }} />Red (56)</li>
                            <li>  <Checkbox {...label} style={{ color: "#c7c52a" }} />Red (56)</li>
                            <li> <Checkbox {...label} style={{ color: "#c7c52a" }} />Red (56)</li>
                            <li>  <Checkbox {...label} style={{ color: "#c7c52a" }} />Red (56)</li>
                            <li>  <Checkbox {...label} style={{ color: "#c7c52a" }} />Red (56)</li>
                            <li>  <Checkbox {...label} style={{ color: "#c7c52a" }} />Red (56)</li>
                            <li>  <Checkbox {...label} style={{ color: "#c7c52a" }} />Red (56)</li>
                        </ul>
                    </div>
                    <div className="filters">
                        <h5>Customer reviews</h5>
                        <ul>
                            <li>  <Link to=""><Rating name="half-rating-read size-large" defaultValue={4} readOnly size="large"/><strong className='upp'>& Up</strong></Link></li>
                            <li>  <Link to=""><Rating name="half-rating-read size-large" defaultValue={3} readOnly size="large"/><span className='upp'>& Up</span></Link></li>
                            <li>  <Link to=""><Rating name="half-rating-read" defaultValue={2} readOnly size="large"/><span className='upp'>& Up</span></Link></li>
                            <li>   <Link to=""><Rating name="half-rating-read" defaultValue={1} readOnly size="large"/><span className='upp'>& Up</span></Link></li>
                        </ul>
                    </div>

                    <div className="filters">
                    <h5>Newe Arrivals</h5>
                    </div>


                    <div className="d-flex">
                        <Button className="btn btn-primary" variant="contained">
                            <FilterAltOutlinedIcon /> Filter
                        </Button>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Sidebar
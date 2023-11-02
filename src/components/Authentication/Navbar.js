import React from 'react'
import '../../css/style.css'
import '../../css/slick.css'
import '../../css/slick-theme.css'
import '../../css/nouislider.min.css'
import '../../css/all.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserDetails } from '../../redux/actions/userAction'
import { useAlert } from 'react-alert'

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const dispatch = useDispatch()
    const alert = useAlert()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const jsonData = localStorage.getItem("profile")


    useEffect(() => {
        dispatch(fetchUserDetails(JSON.parse(jsonData)))
    }, [dispatch])


    const userData = useSelector((state) => state.userDetails.user)

    console.log("userData", userData)

    const handleLogout = (e)=>{
        e.preventDefault()
        localStorage.removeItem("token")
        localStorage.removeItem("profile")
        dispatch(fetchUserDetails(null))
        alert.success("Profile Logout")
    }

    return (
        <>

            <div id="top-header">
                <div className="container">
                    <ul className="header-links pull-left">
                        <li className="cursor-on-text"><i className="fa fa-phone "></i>+91 9874266014</li>
                        <li className="cursor-on-text"><i className="fa fa-envelope-o"></i> email@email.com</li>
                        <li className="cursor-on-text"><i className="fa fa-map-marker"></i>India , Kolkata</li>
                    </ul>
                    {
                        userData === null ? (
                            <ul className="header-links pull-right">
                                <Link to="/login"> <li className="cursor-on-text" ><i className="fa fa-user-o"></i> My Account</li></Link>

                            </ul>
                        ) : (
                            <ul className="header-links pull-right">
                                <li className="cursor-on-text" onClick={handleShow}><img src={userData?.user?.avatar.url} className="rounded-circle" style={{height:"34px"}}/><span style={{marginLeft:"7px"}}>{userData?.user?.name}</span></li>
                                <li className="cursor-on-text" onClick={handleLogout}><i className="fa fa-sign-out"></i>Logout</li>
                            </ul>
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default Navbar
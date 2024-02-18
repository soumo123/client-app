import React, { useState, useEffect, useRef } from 'react'
import '../css/style.css'
import Logo from '../../images/shopgologo.png'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Select from '../Dropdown/Select';
import Whislist from '../../images/whislist.png'
import Cart from '../../images/cart.png'
import Account from '../../images/account.png'
import Button from '@mui/material/Button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import HeaderNav from './Navbar/HeaderNav';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SignIn from '../../images/sign-in.jpg'
import SignUp from '../../images/signup-image.jpg'
import axios from 'axios'
import ClearIcon from '@mui/icons-material/Clear';
import {useSelector, useDispatch} from 'react-redux'
import { fetchUserDetails } from '../../redux/actions/userAction';

const Header = () => {
    const [isDropDownOpen, setISDropDownOpen] = useState(false)
    const headerRef = useRef()
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const [mode, setMode] = useState("1")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [image, setImage] = useState()
    const [imagePreview, setImagePreview] = useState("")

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleOpenSignup = () => {
        setMode("2")
        setName("")
        setNumber("")
        setEmail("")
        setPassword("")

    }

    const handleClose = () => {
        setOpen(false);
        setMode("1")
        setName("")
        setNumber("")
        setEmail("")
        setPassword("")
    };

    const handleReturnLogin = () => {
        setMode("1")
        setName("")
        setNumber("")
        setEmail("")
        setPassword("")
    }



    const handleSignIn = async () => {
        const json = {
            email: email,
            password: password
        }
        const config = {
            headers: {
                'Content-Type': "application/json",
            },
            withCredentials: true
        }
        const { data } = await axios.post(`${process.env.REACT_APP_PRODUCTION_URL}/api/soummya/login`, json, config)
        const profileData = data
        localStorage.setItem("token", data.token)
        localStorage.setItem("profile", JSON.stringify(profileData))
        dispatch(fetchUserDetails(data))
    }

    

    useEffect(() => {

        window.addEventListener("scroll", () => {
            let position = window.pageYOffset;
            console.log("position", position)
            if (position > 100) {
                headerRef.current.classList.add("fixed")

            } else {
                headerRef.current.classList.remove("fixed")

            }
        })
    }, [])


    return (
        <>
            <div className="headerWapper" ref={headerRef}>


                <header>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-2">
                                <img src={Logo} style={{ height: "64%", width: "20%" }} />
                            </div>
                            <div className='col-sm-5'>
                                <div className="headerSearch d-flex align-items-center">
                                    <Select />

                                    <div className='search'>
                                        <input type="text" placeholder="Search Products...." />
                                        <SearchIcon className="searchIcon cursor" />
                                    </div>
                                </div>
                            </div>



                            <div className='col-sm-5 mt-2'>
                                <div className="ml-auto d-flex align-items-center">
                                    <ul className="list list-inline mb-0 headerTabs">
                                        <li className="list-inline-item">
                                            <span>
                                                <img src={Whislist} />
                                                <span className="badge bg-success rounded-circle">3</span>
                                                Whishlist
                                            </span>
                                        </li>
                                        <li className="list-inline-item">
                                            <span>
                                                <img src={Cart} />
                                                <span className="badge bg-success rounded-circle">3</span>
                                                Cart
                                            </span>
                                        </li>
                                        <li className="list-inline-item" onClick={() => setISDropDownOpen(!isDropDownOpen)}>
                                            <span>
                                                <img src={Account} />

                                                Account
                                            </span>
                                            {
                                                isDropDownOpen ? (
                                                    <ClickAwayListener onClickAway={() => setISDropDownOpen(false)}>

                                                        <ul className="dropdownMenu">
                                                            <li>
                                                                <Button className="align-items-center"><PersonOutlineOutlinedIcon />My Account</Button>
                                                                <Button className="align-items-center"><DriveFileMoveOutlinedIcon />Orders</Button>
                                                                <Button className="align-items-center"><FavoriteBorderOutlinedIcon />Whishlists</Button>
                                                                <Button className="align-items-center" onClick={handleClickOpen}><LogoutOutlinedIcon />Sign in</Button>
                                                            </li>
                                                        </ul>

                                                    </ClickAwayListener>
                                                ) : ("")
                                            }

                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>

                </header>
                <HeaderNav />
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >

                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <span className="clear">

                                <ClearIcon onClick={handleClose} />
                            </span>
                            <div className="row">
                                <div className="col-md-6">
                                    {
                                        mode === "1" ?
                                            <img src={SignIn} /> : <img src={SignUp} />
                                    }

                                </div>
                                <div className="col-md-6">
                                    <div className="sign-name">
                                        {mode === "1" ? <h1>{"Sign in"}</h1> : <h1>{"Sign up"}</h1>}
                                    </div>
                                    {
                                        mode === "1" ? (
                                            <>
                                                <div className="form-title">
                                                    <div className="email-input">
                                                        <div className='form-group'>
                                                            <label className="email-label" >
                                                                <i class="fa fa-envelope" aria-hidden="true"></i>
                                                            </label>
                                                            <input type="text" name="email" value={email} placeholder="Enter email " onChange={(e) => setEmail(e.target.value)} />
                                                        </div>
                                                    </div>
                                                    <div className="email-input mt-3" >
                                                        <div className='form-group'>
                                                            <label className="password-label">
                                                                <i class="fa fa-lock" aria-hidden="true"></i>
                                                            </label>
                                                            <input type="password" name="password" value={password} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                                                        </div>

                                                        <Button variant="contained" className="mt-3 form-submit" onClick={handleSignIn} >Sign in</Button>
                                                        <div className="mt-3">
                                                            <span>or login with <Button style={{
                                                                width: "115px",
                                                                height: "30px",
                                                                textTransform: "capitalize"
                                                            }}>Phone Number</Button></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-5">
                                                    <p style={{ fontWeight: "700" }}>Dont have any account ? <Button style={{
                                                        color: "#999",
                                                        width: "68px",
                                                        height: "30px",
                                                        textTransform: "capitalize",
                                                        fontWeight: "bold"
                                                    }} onClick={handleOpenSignup}>Sign up</Button> </p>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="form-title">
                                                    <div className="email-input">
                                                        <div className='form-group'>
                                                            <label className="name-label" >
                                                                <i class="fa fa-user" aria-hidden="true"></i>
                                                            </label>
                                                            <input type="text" name="name" value={name} placeholder="Enter name " onChange={(e) => setName(e.target.value)} />
                                                        </div>
                                                    </div>
                                                    <div className="email-input mt-3">
                                                        <div className='form-group'>
                                                            <label className="number-label" >
                                                                <i class="fa fa-mobile" aria-hidden="true"></i>
                                                            </label>
                                                            <input type="text" name="number" value={number} placeholder="Enter Mobile No " onChange={(e) => setNumber(e.target.value)} />
                                                        </div>
                                                    </div>

                                                    <div className="email-input mt-3">
                                                        <div className='form-group'>
                                                            <label className="signup-email-label" >
                                                                <i class="fa fa-envelope" aria-hidden="true"></i>
                                                            </label>
                                                            <input type="text" name="email" value={email} placeholder="Enter email " onChange={(e) => setEmail(e.target.value)} />
                                                        </div>
                                                    </div>
                                                    <div className="email-input mt-3" >
                                                        <div className='form-group'>
                                                            <label className="signup-pass-label">
                                                                <i class="fa fa-lock" aria-hidden="true"></i>
                                                            </label>
                                                            <input type="password" name="password" value={password} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                                                        </div>

                                                        <Button variant="contained" className="mt-3 form-submit" >Sign up</Button>
                                                        <div className="mt-3">
                                                            <span>Do you want to login ?<Button onClick={handleReturnLogin} style={{
                                                                width: "52px",
                                                                height: "30px",
                                                                textTransform: "capitalize"
                                                            }}>Login</Button></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </>
                                        )
                                    }

                                </div>
                            </div>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div >
        </>
    )
}

export default Header
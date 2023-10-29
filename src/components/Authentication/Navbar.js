import React from 'react'
import '../../css/style.css'
import '../../css/slick.css'
import '../../css/slick-theme.css'
import '../../css/nouislider.min.css'
import '../../css/all.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Navbar = () => {

    const [show, setShow] = useState(false);
    const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    




    return (
        <>

            <div id="top-header">
                <div className="container">
                    <ul className="header-links pull-left">
                        <li className="cursor-on-text"><i className="fa fa-phone "></i>+91 9874266014</li>
                        <li className="cursor-on-text"><i className="fa fa-envelope-o"></i> email@email.com</li>
                        <li className="cursor-on-text"><i className="fa fa-map-marker"></i>India , Kolkata</li>
                    </ul>
                    <ul className="header-links pull-right">
                        <li className="cursor-on-text" onClick={handleShow}><i className="fa fa-user-o"></i> My Account</li>
                        <li className="cursor-on-text"><i className="fa fa-dollar"></i>Logout</li>
                    </ul>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form className="loginForm" >
                <div className="loginEmail">
                
                  <input
                    type="email"
                    placeholder="Email"

                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />

                </div>
                <div className="loginPassword">
                  

                  <input
                    type="password"
                    placeholder="Password"

                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>

              <div className="form-group">
                <input type="submit" value="Login" className="btn btn-primary" />
                </div>
                <div className="form-group">
                 
                    {/* <div className="phoneiocn">
                <i class="fa fa-mobile" aria-hidden="true"></i>
                </div> */}
                    <a href="/otp/verification" className="otpbtn btn">
                      Login With Number</a>
               
                </div>

              </form>



                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Navbar
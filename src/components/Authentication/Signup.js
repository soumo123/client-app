import React, { useState, useEffect } from 'react'
import { BsFillPencilFill } from "react-icons/bs";
import axios from 'axios'
import { useAlert } from 'react-alert'
import '../../css/login.css'
import '../../css/signup.css'



const Signup = ({resgister,setRegister}) => {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [password, setPassword] = useState("")
    const [image, setImage] = useState()
    const [imagePreview, setImagePreview] = useState("/profile.png")

    const [error, setError] = useState(false)
    const [error1, setError1] = useState(false)
    const [error2, setError2] = useState(false)
    const [error3, setError3] = useState(false)
    const [error4, setError4] = useState(false)
    const[enable,setEnable]=useState(false)


    const alert = useAlert()


    const registerSubmit = async (e) => {
        e.preventDefault()
        if (!email || !password || !number || !password || !image) {
            setError(true)
            setError1(true)
            setError2(true)
            setError3(true)
            setError4(true)

        }else{
            setEnable(true)
            try {
                let json = {
                    name: name,
                    email: email,
                    password: password,
                    number: number,
                    avatar: image
                }
                const config = {
                    headers: {
                        'Content-Type': "application/json",
                        // 'Accept':"/"
                    },
                    withCredentials: true
                }
    
                await axios.post(`${process.env.REACT_APP_PRODUCTION_URL}/api/soummya/register`, json, config).then((res) => {
                    if (res.status === 200) {
                        alert.success("Regitration Successfull")
                        setEnable(false)
                        setRegister(!resgister)
                        setName("")
                        setEmail("")
                        setNumber("")
                        setPassword("")
                        setImage()
                        setImagePreview("")
                    }
                }).catch((err) => {
                    alert.error("Registration Not Done")
                    setEnable(false)
                    setName("")
                    setEmail("")
                    setNumber("")
                    setPassword("")
                    setImage()
                    setImagePreview("")
                })
            } catch (error) {
                alert.error("Registration Not Done")
            }
        }
       



    }



    const registerDataChange = (e) => {
        if (e.target.name === "profile") {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagePreview(reader.result)
                    setImage(reader.result)
                }
            }
            reader.readAsDataURL(e.target.files[0])
            console.log("reader", reader)
        } else {
            //   setUser({...user,[e.target.name]:e.target.value})
        }
    }


    return (
        <>
            <div className="container1 order">
                <div className="facebook-page order">
                    <div className="text">
                        <h1>Our Website Name</h1>
                        <p></p>
                        <p></p>
                    </div>
                    <form action="#" className="login-form">
                        <div class="user-info">
                            <div class="profile-pic">
                                <img src={imagePreview} />
                                <div class="layer">
                                    <div class="loader"></div>
                                </div>
                                <a class="image-wrapper" href="#">
                                    <form id="profilePictureForm" action="#">
                                        <input style={{
                                            display: 'none'
                                        }} id="changePicture" type="file" accept="image/*" name="profile" onChange={registerDataChange} />
                                        <label htmlFor="changePicture" style={{
                                            marginTop: "3px"
                                        }}>
                                            <BsFillPencilFill />
                                        </label>
                                    </form>
                                </a>
                            </div>
                        </div>
                        <input type="text" placeholder="Enter Name" value={name} onChange={(e) => { setName(e.target.value); setError2(false) }} required />

                        {error2 && !name && (
                            <span className="error-tag" style={{ color: 'red', textAlign: 'justify' }}>
                                *Please Enter Name
                            </span>
                        )}

                        <input type="number" placeholder="Enter Phone Number" value={number} onChange={(e) => { setNumber(e.target.value); setError3(false) }} required />

                        {error3 && !email && (
                            <span className="error-tag" style={{ color: 'red', textAlign: 'justify' }}>
                                *Please Enter  Number
                            </span>
                        )}

                        <input type="email" placeholder="Email Id" value={email} onChange={(e) => { setEmail(e.target.value); setError(false) }} required />

                        {error && !email && (
                            <span className="error-tag" style={{ color: 'red', textAlign: 'justify' }}>
                                *Please Enter Email
                            </span>
                        )}


                        <input type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value); setError1(false) }} required />


                        {error1 && !password && (
                            <span className="error-tag" style={{ color: 'red', textAlign: 'justify' }}>
                                *Please Enter Password
                            </span>
                        )}

                        <div className="link">
                            <button type="submit"  disabled={enable} className="login" onClick={registerSubmit}>Sign up</button>
                        </div>
                        <hr />

                    </form>
                </div>
            </div>

        </>
    )
}

export default Signup
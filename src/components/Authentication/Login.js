import React, { useState, useEffect } from 'react'
import '../../css/login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAlert } from 'react-alert'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserDetails } from '../../redux/actions/userAction'
import Signup from './Signup'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const [resgister, setRegister] = useState(false)
  const [error, setError] = useState(false)
  const [error1, setError1] = useState(false)


  const navigate = useNavigate()
  const alert = useAlert()
  const dispatch = useDispatch()

  const loginSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError(true)
      setError1(true)

    } else {
      try {
        let json = {
          email: email,
          password: password
        }
        const config = {
          headers: {
            'Content-Type': "application/json",
          },
          withCredentials: true,
    



        }
        const { data } = await axios.post(`${process.env.REACT_APP_PRODUCTION_URL}/api/soummya/login`, json, config)
        if (data.success) {
          alert.success("Login Successfull")
          const profileData = data
          localStorage.setItem("token", data.token)
          localStorage.setItem("profile", JSON.stringify(profileData))
          dispatch(fetchUserDetails(profileData))
          navigate("/")
        }

      } catch (error) {
        console.log(error, "error")
        alert.error(error.response.data.message)
      }
    }

  }



  return (
    <>
      {
        resgister ? (
          <Signup resgister={resgister} setRegister={setRegister} />
        ) : (
          <div className="container1 order">
            <div className="facebook-page order">
              <div className="text">
                <h1>Our Website Name</h1>
                <p></p>
                <p></p>
              </div>
              <form action="#" className="login-form">
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
                  <button type="submit" className="login" onClick={loginSubmit}>Login</button>
                  <Link to="/reset-password" className="forgot">Forgot password?</Link>
                </div>
                <hr />
                <div className="button">
                  <button className="btn btn-primary" onClick={(e) => setRegister(true)}>Create new account</button>
                </div>
              </form>
            </div>

          </div>

        )
      }



    </>
  )
}

export default Login
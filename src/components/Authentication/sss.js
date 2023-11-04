import React from 'react'

const sss = () => {
    return (
        <>
            <div class="signup-form">
                <div class="container">
                    <div class="header">
                        <div class="user-info">
                            <div class="profile-pic">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/bg_33.png" />
                                <div class="layer">
                                    <div class="loader"></div>
                                </div>
                                <a class="image-wrapper" href="#">
                                    <form id="profilePictureForm" action="#">
                                        <input style={{
                                            display: 'none'
                                        }} id="changePicture" type="file" />
                                        <label htmlFor="changePicture" style={{
                                            marginTop: "3px"
                                        }}>
                                            <BsFillPencilFill />
                                        </label>
                                    </form>
                                </a>
                            </div>
                        </div>
                    </div>
                    <form>
                        <div class="input">
                            <i class="fa-solid fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div class="input">
                            <i class="fa-solid fa-envelope"></i>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div class="input">
                            <i class="fa-solid fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <input class="signup-btn" type="submit" value="SIGN UP" />
                    </form>
                    <p>Or sign up with</p>
                    <div class="social-icons">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-google"></i>
                    </div>
                    <p>Already have an account <a href="#">sign in</a></p>
                </div>
            </div>
        </>
    )
}

export default sss
import React from 'react'
import './notfound.css'
import NotfoundImage from '../../images/notfound.svg'
import Button from '@mui/material/Button';

const Notefound = () => {
    return (
        <>

            <section className="notFound">
                <div className="container-fluid">
                    <div className="box">
                        <img src={NotfoundImage} />
                        <br/>
                        <h1>Page Not Found</h1>
                        <p>The page you're looking for might have been moved , removed , renamed or might never existed </p>
                        <br/>

                        <Button href="/" className="button-color catTab m-auto bthp"  size="large" >
                            Back to home
                        </Button>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Notefound
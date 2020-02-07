import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

export default function NavBar () {
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                <img
                    alt=""
                    src={"https://res.cloudinary.com/dendekky/image/upload/v1578348778/serv-mart/serv-mart/Common_Sense_20170422_200323_ctkgwd.jpg"}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                PowerNik Bonus Generator
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}
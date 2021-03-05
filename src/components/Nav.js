import React, { useState, useEffect } from 'react'
import '../style/Nav.css'

const Nav = () => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F03%2FNetflix_logo.png&f=1&nofb=1"
                alt="Netflix logo"
                className="nav_logo" />

            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpro2-bar-s3-cdn-cf1.myportfolio.com%2Fdddb0c1b4ab622854dd81280840458d3%2F98032aebff601c1d993e12a0_rw_600.png%3Fh%3D8030f4d5734548795c22da59ca72e3e1&f=1&nofb=1" alt="Netflix avatar" className="nav_avatar" />


        </div>
    )
}

export default Nav

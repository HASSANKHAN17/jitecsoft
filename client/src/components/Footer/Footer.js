import React from 'react'
import "./Footer.scss"
import {Link} from 'react-router-dom'


const Footer = () => {
    return (
        <div className="row footer">
            <div className="subdivs">
            <h1>Follow Us On <br /><span className="greenspan">Social Media</span></h1>
            <p>Stay connected to us by joining us, on our socials.</p>
            <div className="icondiv">
            <span className="iconspan"><i class="fab fa-facebook fa-3x"></i></span>
            <span className="iconspan"><i class="fab fa-twitter-square fa-3x"></i></span>
            <span className="iconspan"><i class="fab fa-instagram fa-3x"></i></span>
            <span className="iconspan"><i class="fab fa-linkedin fa-3x"></i></span>
            <span className="iconspan"><i class="fab fa-whatsapp-square fa-3x"></i></span>
            </div>
            </div>

            <div className="subdivs linkdiv">
                <Link className="footerlinks" to="/contactus">Contact Us</Link>
                <Link className="footerlinks" to="/ar">Augmented Reality</Link>
                <Link className="footerlinks" to="/vr">Virtual Reality</Link>
                <Link className="footerlinks" to="/ai">Artificial Intelligence</Link>
            </div>
            <div className="col-12" style={{textAlign:"center"}}>
            <p className="copy" style={{marginTop:"3%"}}>Copyright 2012 - 2021 JitecSoft | All Rights Reserved | Powered by JitecSoft | AR/VR</p>
            </div>

        </div>
    );
}

export default Footer;
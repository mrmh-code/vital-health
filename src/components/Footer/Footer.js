import React from 'react';
import {FaGooglePlusG,FaFacebook,FaLinkedinIn,FaTwitter,FaInstagram} from "react-icons/fa";
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <footer className='footer-section'>
            <div className='row footer-row  row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 '>

        <div className="col">
            <h4>Company</h4> 
                <p> About Us</p> 
                <p>Career</p>
                 <p> Editorial Team</p>
                  <p>Protection</p>  
                  
        </div>

        <div className="col">
            <h4>More</h4> 
                <p> Terms & Condition</p> 
                <p>Privacy</p>
                 <p> Advertise</p>
                  <p>Join as Doctors</p>  
        </div>

        <div className="col">
            <h4>Our partner</h4> 
                <p>One-Fitness</p> 
                <p>One-Drugs</p>
                 <p> One-Live</p>
                  
        </div>

        <div className="col">
            <h4>Contact</h4> 
                <p>351 Willow Street Franklin, MA 02038</p> 
                <p>701-573-7582</p>
                 <p> healthcare@temporary.net</p>
                  <h4>Social Media</h4>
                <span className='p-2'><FaLinkedinIn/></span>
                <span className='p-2'><FaTwitter/></span>
                <span className='p-2'><FaFacebook/></span>
                <span className='p-2'><FaInstagram/></span>
                <span className='p-2'><FaGooglePlusG/></span> 
                 

        </div>

        

        </div>
            </footer>
         
        </div>
    );
};

export default Footer;
import { Container } from '@mui/material';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
       
             <div className="footer">
                <div className="footer-img">
                    <img src="https://cdn.shopify.com/s/files/1/0418/1141/1111/files/footer-logo_6eb5d4ee-00fc-49ad-887f-289126a125fc_x26@2x.png?v=1621572577" alt="" />
                    <p>you sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="information">
                    <div>
                        <h2>Follow Us</h2>
                        <p>Facebook</p>
                        <p>Pinterest</p>
                        <p>Instagram</p>
                    </div>

                    <div>
                        <h2>Information</h2>
                        <p>Advanced Search</p>
                        <p>Search Terms</p>
                        <p>Help & Faq's</p>
                        <p>Store Location</p>
                        <p>Order & Return</p>
                    </div>

                    <div>
                        <h2>Help</h2>
                        <p>Shipping</p>
                        <p>Returns</p>
                        <p>Careers</p>
                        <p>FAQ</p>
                        <p>Contact Us</p>
                    </div>

                    <div>
                        <h2>Support</h2>
                        <p>E-Mail Support</p>
                        <p>Terms of Delivery</p>
                        <p>Refund & Return</p>
                        <p>Privacy Policy</p>
                        <p>Chat Support</p>
                    </div>

                    <div>
                        <h2>Contact Us</h2>
                        <p>Boalkhali,Chittagong,Bangladesh</p>
                        <p>+880 1870 621592</p>
                        <p>8:00 AM to 5:00 PM</p>
                        <p>kamrulislam@gmail.com</p>
                    </div>
                </div>
                <p ><small className="end-text">Copyright © 2021 Anamika Jewelery, All rights reserved. Present by MoxCreative</small></p>
            </div>
            
       
    );
};

export default Footer;
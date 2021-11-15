import { Button, Link } from '@mui/material';
import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <h1>Highclass craftsmanship which you have always deserved</h1>
            <h3 className="style">We are experts in a number of manufacturing techniques, blending old and new methods to give you the best of both.</h3>
            <Link style={{textDecoration:"none",}} to ={"/allproducts"}><Button style={{marginRight:'3px'}}   variant="contained">More Collection</Button></Link>
        </div>
    );
};

export default Banner;
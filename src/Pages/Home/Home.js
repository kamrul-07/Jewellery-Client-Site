import React from 'react';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import Products from './Products/Products';
import Reviews from './Review/Reviews';


const Home = () => {
    return (
        <div>
            
            <Navigation></Navigation>
            <Banner></Banner>
           <Products></Products>
           <Reviews></Reviews>
           <Footer></Footer>
        </div>
    );
};

export default Home;
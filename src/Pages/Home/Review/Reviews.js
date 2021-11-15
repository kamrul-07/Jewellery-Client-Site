import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';

import { Container, Typography } from '@mui/material';
import Review from './Review';

const Reviews = () => {
    
   const [reviews,setReviews]=useState([]);

   useEffect(() => {
       fetch('http://localhost:5000/review')
       .then (res => res.json())
       .then (data => setReviews(data))
       
   },[])
   console.log(setReviews);
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Typography style={{textAlign:"center"}} sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
        Why Choose Us
            </Typography>
            <Typography style={{textAlign:"center"}} sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
            Bright and shiny jewelry made just for you
            </Typography>
            
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    reviews.map(review => <Review
                        key={review.name}
                        review={review}
                    ></Review>)
                }
            </Grid>
        </Container>
    </Box>
    );
};

export default Reviews;
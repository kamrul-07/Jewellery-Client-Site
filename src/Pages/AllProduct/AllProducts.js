
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import AllProduct from '../AllProduct/AllProduct'

const AllProducts = () => {
    const [allproducts,setAllProducts] =useState([]);
    useEffect(() => {
        fetch("https://agile-island-10543.herokuapp.com/allproducts")
    .then(res => res.json())
    .then(data => setAllProducts(data))
    },[])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
            <Typography style={{textAlign:"center"}} sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
            Featured Products
                </Typography>
                <Typography style={{textAlign:"center"}} sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                Products we provide
                </Typography>
                
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        allproducts.map(allproduct => <AllProduct
                            key={allproduct.id}
                            allproduct={allproduct}
                        ></AllProduct>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default AllProducts;
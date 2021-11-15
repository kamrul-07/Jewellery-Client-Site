import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container,} from '@mui/material';
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router';



const Products = () => {
    const [products,setProducts] =useState([]);
    const {user} =useAuth()

    useEffect(() => {
        fetch("http://localhost:5000/products")
    .then(res => res.json())
    .then(data => setProducts(data))
    },[])


    const history = useHistory()
    const handleDetailes = id =>{
        const uri =`/product/${id}`
        history.push(uri)
    }

    const addToCart=(index)=>{
        const data=products[index];
        data.email=user?.email;
        
        fetch('https://immense-cliffs-49717.herokuapp.com/addToCart',{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
        })

    }
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
                        products.map(product =>(
                            <Grid  item xs={4} sm={4} md={4}>
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
            <CardMedia
                component="img"
                style={{ width: 'auto', height: '140px', margin: '0 auto' }}
                image={product.img}
                alt="green iguana"
            />
            <CardContent>
                <Typography variant="h5" component="div"  sx={{ fontWeight: 'bold' }}>
                    {product.name}
                </Typography>
                <Typography sx={{my:2}} variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
                <Button onClick={()=> handleDetailes(product._id)} variant="contained">Shop Now</Button>
            </CardContent>
        </Card>
    </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;
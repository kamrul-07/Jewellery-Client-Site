import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const ManageProducts = () => {
    const [products,setProducts] =useState([]);
    const [isDeleted,setIsDeleted]=useState(null)

    useEffect(() => {
        fetch("http://localhost:5000/manageproducts")
    .then(res => res.json())
    .then(data => setProducts(data))
    },[isDeleted])

    const handleDelete = id => {
        fetch(`http://localhost:5000/deleteProduct/${id}`,{
            method:"DELETE",
            headers:{"content-type" :"application/json"},
        })
        .then((res) => res.json())
        .then ((result) => {
           if(result.deletedCount){
            setIsDeleted(true)
           } 
           else{
            setIsDeleted(false)
           }
        })
        console.log(id);
    }
    
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Typography style={{textAlign:"center"}} sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
        Featured Products
            </Typography>
            <Typography style={{textAlign:"center"}} sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
            All Products
            </Typography>
            
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                
                   {
                       products.map((product,index) => (
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
                             <Button onClick={() => handleDelete(product._id)} variant="contained">Delete</Button>
                                 </CardContent>
                                 </Card>
                              </Grid>
                       )
                        
                       )
                   }  
            </Grid>
        </Container>
    </Box>
    );
};

export default ManageProducts;
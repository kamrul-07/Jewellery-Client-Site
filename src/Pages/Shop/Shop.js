import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { textAlign } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PurchaseModal from '../PurchaseModal/PurchaseModal';

const Shop = () => {
    const {id} =useParams()
    const [details,setDetails] = useState({});
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect( () =>{
        fetch(`http://localhost:5000/product/${id}`)
        .then (res => res.json())
        .then (data => setDetails(data))
    },[]);

    

   
    return (
        <Grid>
            <Card sx={{ width: '60%', border: 0, boxShadow: 2, textAlign:"center" }}>
            <CardMedia
                component="img"
                style={{ width: 'auto', height: '140px', margin: '0 auto' }}
                image={details?.img}
                alt="green iguana"
            />
            <CardContent>
                <Typography variant="h5" component="div"  sx={{ fontWeight: 'bold' }}>
                    {details.name}
                </Typography>
                <Typography sx={{my:2}} variant="body2" color="text.secondary">
                    {details?.description}
                </Typography>
               <Button onClick={handleOpen} variant="contained">Purchase Now</Button>
            </CardContent>
        </Card>
        <PurchaseModal
        open={open}
        productName={details.name}
        handleClose={handleClose}
        ></PurchaseModal>
        </Grid>
    );
};

export default Shop;
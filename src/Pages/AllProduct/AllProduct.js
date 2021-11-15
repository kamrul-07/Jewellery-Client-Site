import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';

const AllProduct = ({allproduct}) => {
    const {name,img,description}=allproduct;
    return (
        <Grid  item xs={4} sm={4} md={4}>
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
            <CardMedia
                component="img"
                style={{ width: 'auto', height: '140px', margin: '0 auto' }}
                image={img}
                alt="green iguana"
            />
            <CardContent>
                <Typography variant="h5" component="div"  sx={{ fontWeight: 'bold' }}>
                    {name}
                </Typography>
                <Typography sx={{my:2}} variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Button variant="contained">Shop Now</Button>
            </CardContent>
        </Card>
    </Grid>
    );
};

export default AllProduct;
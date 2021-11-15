import React from 'react';
import { Avatar, Grid, Rating } from '@mui/material';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import useAuth from '../../hooks/useAuth';


const Review = ({review}) => {
    const [value, setValue] = React.useState(0);
    const {name,discription,profession,rating} = review;
   

    return (
        <Grid  item xs={4} sm={4} md={4}>
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
        
            <CardContent>
            <Avatar style={{textAlign:"center"}} alt="Profile Picture" src="" /> <Typography variant="h5" component="div"  sx={{ fontWeight: 'bold' }}>
                    {name}
                </Typography>
                <Typography sx={{my:2}} variant="body2" color="text.secondary">
               {profession}
                </Typography><br />
                <Typography sx={{my:2}} variant="body2" color="text.secondary">
                 Discription:{discription}
                </Typography>
                
                <Typography component="legend">Rating</Typography>
               
                <Rating name="no-value" value={rating} />
            </CardContent>
        </Card>
    </Grid>
    );
};

export default Review;
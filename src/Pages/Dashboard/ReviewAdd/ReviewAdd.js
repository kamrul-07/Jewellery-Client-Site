
import { Button, Rating, TextField, Typography } from '@mui/material';
import { Box, } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';


const style = {
    width:"50%",
    textAlign:"center",
    margin:"auto"
  };
  

const ReviewAdd = () => {
    const [value, setValue] = React.useState(0);
    const {user}=useAuth();
    const initialInfo = {name:user.displayName,
        }
        const [review,setReview] = useState(initialInfo)    
    const handleOnBlur = e =>{
        const field =e.target.name;
        const value =e.target.value;
        const newReview= {...review}
        newReview[field] = value;
        setReview(newReview);
        
      }

      const handleSubmit = e =>{
        const reviewNote = {
          ...review,
          rating:value
          
         
        }
        console.log(reviewNote)
        
        fetch('http://localhost:5000/review',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(reviewNote)
        })
        .then(res => res.json())
        .then(data => {
          
        })

        
        e.preventDefault();
    }
    return (
        <Box sx={style}>
            <Typography>Give Your Opinion</Typography>
            <form onSubmit={handleSubmit}>
        <TextField
        disabled
      sx={{width:'95%',m:1}}
      id="outlined-size-small"
      name='name'
      onBlur={handleOnBlur}
      defaultValue={user.displayName}
      size="small"
    />
        <TextField
      sx={{width:'95%',m:1,}}
      id="outlined-size-small"
      onBlur={handleOnBlur}
      multiline
      rows={4}
      name="discription"
      placeholder="Discription"
      size="small"
    />
       
        <TextField
      sx={{width:'95%',m:1,}}
      id="outlined-size-small"
      onBlur={handleOnBlur}
      size="small"
      name="profession"
      placeholder="Profession"
    />
    <br />
    <Typography component="legend">Give your rating </Typography>
    <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <br />
    <Button type='submit' variant="contained">Submit</Button>
        </form>
        </Box>
    );
};

export default ReviewAdd;
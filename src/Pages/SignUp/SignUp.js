import React, { useState } from 'react';
import { Alert, Button, Checkbox, CircularProgress, Container, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material'
import { Link ,useHistory} from 'react-router-dom';
import useAuth from '../hooks/useAuth'


const SignUp = () => {
    const {user,registerUser,isLoading,error}=useAuth();
    const history=useHistory();

    const paperStyle = { padding: 20, width: 300, }
    const headerStyle = { margin: 0 }
    const [loginData,setLoginData]=useState({})
    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newData={...loginData};
        newData[field]=value;
        setLoginData(newData);
        console.log(newData);
        
    }
     
    const handleOnSubmit = e =>{
       if(loginData.password !== loginData.password2){
           alert('password not match')
       }
       
       registerUser(loginData.email,loginData.password,history,loginData.name);
       e.preventDefault();
    }
   
    return (
       <Container>
            <Grid style={{marginTop:'10px'}} container rowSpacing={1} columnSpacing={{ xs: 12, sm:6, md: 6, }}>
  <Grid item xs={12} md={6}>
  <Grid>
        <Paper style={paperStyle}>
            <Grid align='center'>
                
                <h2 style={headerStyle}>Sign Up</h2>
                <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
            </Grid>
            {!isLoading && <form onSubmit={handleOnSubmit}>
                <TextField fullWidth label='Name' 
                name="name"
                onChange={handleOnChange}
                placeholder="Enter your name" />
                <br/>
                <br />
                <TextField fullWidth label='Email' 
                name="email"
                onChange={handleOnChange}
                placeholder="Enter your email" />
                <br/>
                <br />
                <TextField fullWidth label='Phone Number'
                name="number"
                onChange={handleOnChange}
                placeholder="Enter your phone number" />
                <br/>
                <br />
                <TextField fullWidth label='Password'
                name="password"
                type="password"
                onChange={handleOnChange}
                placeholder="Enter your password"/>
                <br/>
                <br />
                <TextField fullWidth label='Confirm Password'
                name="password2"
                type="password"
                onChange={handleOnChange}
                placeholder="Confirm your password"/>
                <br/>
               
                <FormControlLabel
                    control={<Checkbox name="checkedA" />}
                    label="I accept the terms and conditions."
                />
                <Typography>
                    Already have an account? Please <Link to={'/login'}>sign in</Link>
                </Typography>
                <Button type="submit" variant="contained">Signup</Button>
            </form>}
           <div style={{textAlign:"center"}}> {isLoading && < CircularProgress/>}</div>
           {user?.email && <Alert severity="success">Congratess we created you!</Alert>}
           {error && <Alert severity="error">{error}</Alert>}
        </Paper>
    </Grid>
  </Grid>
  <Grid item xs={12} md={6}>
    <img  style={{width:"100%"}} src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
  </Grid>
  
</Grid>
       </Container>


       
    );
};


export default SignUp;
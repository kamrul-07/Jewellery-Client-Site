import { Alert, Avatar, Button, Checkbox, CircularProgress, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const Login = () => {
    const{user,loginUser,isLoading,error} =useAuth();
    const [loginData,setLoginData]=useState({})

    const location=useLocation();
    const history =useHistory();

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newData={...loginData};
        newData[field]=value;
        setLoginData(newData);
        
    }
     
    const handleOnSubmit = e =>{
        loginUser(loginData.email,loginData.password,location,history)
        e.preventDefault();
    }

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}></Avatar>
                    <h2>Sign In</h2>
                </Grid>
               <form onSubmit={handleOnSubmit}>
               <TextField label='Email' placeholder='Enter Your Email' 
               name="email"
               onChange={handleOnChange}
               fullWidth required/>
                <br />
                <br />
                <TextField label='Password' placeholder='Enter password'
                name="password"
                onChange={handleOnChange} 
                type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <div style={{textAlign:"center"}}> {isLoading && < CircularProgress/>}</div>
           {user?.email && <Alert severity="success">Congratess we created you!</Alert>}
           {error && <Alert severity="error">{error}</Alert>}
               </form>
                
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do not you have an account ?
                     <Link to={'/signup'} >
                      Sign Up
                </Link>
                </Typography>
            </Paper>
        </Grid>
      
    );
};

export default Login;
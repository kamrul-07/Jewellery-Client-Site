import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'

const Navigation = () => {
  const {user,logOut} =useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{backgroundColor:"#3F3351"}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           ANA <i style={{color:"orange"}} className="fas fa-ring"></i> MIKA
            </Typography>
            <Link style={{textDecoration:"none",}} to ={"/allproducts"}><Button style={{marginRight:'3px'}}   variant="contained">Collection</Button></Link>
           {
             user?.email ?
             <Box >
               <Link style={{textDecoration:"none",}} to ={"/dashboard"}><Button style={{marginRight:'3px'}}   variant="contained">Dashboard</Button></Link>
                <Button onClick={logOut}  variant="contained">Logout</Button>
                
             </Box>
             :
             <Link style={{textDecoration:"none", color:"white"}} to={"/login"}><Button  variant="contained">Login</Button></Link>
             
           }
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navigation;
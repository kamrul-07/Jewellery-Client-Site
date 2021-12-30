import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';


const MakeAdmin = () => {
    const [email,setEmail] =useState('');
    const handleAdminSubmit = e =>{
    const user={email};
    fetch('https://agile-island-10543.herokuapp.com/users/admin',{
        method: 'PUT',
        headers:{'content-type': 'application/json'},
        body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(result=>{
if(result.modifiedCount){
    alert('Admin made successfully!')
}
    })

        e.preventDefault();
    }
    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }
    return (
      <Box >
          <h1 style={{textAlign:"center"}}>Make An Admin</h1>

<form style={{textAlign:"center"}} onSubmit={handleAdminSubmit}>
<TextField 
label="Email"
type="email"
onBlur={handleOnBlur}
 variant="standard" />
<Button type="submit" variant="contained">  Make Admin</Button>
</form>
      </Box>
    );
};

export default MakeAdmin;
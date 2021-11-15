import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import useAuth from '../hooks/useAuth';
import Shop from '../Shop/Shop';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

const PurchaseModal = ({open, handleClose, productName}) => {
    const {user} =useAuth();
    const [purchase, setPurchase]= React.useState({})

    const handleOnBlur = e =>{
        const field =e.target.name;
        const value =e.target.value;
        const newPurchase= {...purchase}
        newPurchase[field] = value;
        setPurchase(newPurchase)
        
      }

      const handleSubmit = e =>{
        const purchaseInfo = {
            ...purchase,
            productName: productName,
            name: user.displayName,
            email: user.email
        }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body:JSON.stringify(purchaseInfo)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.insertedId){
                handleClose();
            }
        })
        e.preventDefault();
    }

    return (
        <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <form onSubmit={handleSubmit}>
              <h2>{productName}</h2>
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
        disabled
      sx={{width:'95%',m:1,}}
      id="outlined-size-small"
      onBlur={handleOnBlur}
      name="email"
      defaultValue={user.email}
      size="small"
    />
       
        <TextField
      sx={{width:'95%',m:1,}}
      id="outlined-size-small"
      name="address"
      onBlur={handleOnBlur}
      size="small"
      placeholder="Address"
    />
        <TextField
      sx={{width:'95%',m:1,}}
      id="outlined-size-small"
      onBlur={handleOnBlur}
      name="phone"
      size="small"
      placeholder="Phone Number"
    />
      <br />
    <Button type='submit' variant="contained">Submit</Button>
        </form>
          </Box>
        </Fade>
      </Modal>
        </>
    );
};

export default PurchaseModal;
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import Typography from '@mui/material/Typography';

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data)=> {
      ;
    fetch(`http://localhost:5000/addProduct`,{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data),
    })
    .then (res => res.json())
    .then (data => console.log(data))
};
    return (
        <Box  style={{textAlign:"center",marginTop:"15px",}}>
            <Typography>
                Add a Single Product
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
        
        <input style={{padding:"10px",margin:"5px",width:"50%",}} {...register("name",{required:true})} required
        placeholder="Product Name" />
        <br/>
        
        <input style={{padding:"10px",margin:"5px",width:"50%"}} {...register("description", { required: true })}  placeholder="Discription"/>
        <br/>
        <input style={{padding:"10px",margin:"5px",width:"50%"}} {...register("img", { required: true })}  placeholder="Image URL"/>
        <br/>
       
        {errors.exampleRequired && <span>This field is required</span>}
        
        <input type="submit" style={{padding:"10px",background:"skyblue",border:"none",borderRadius:"6px"}}/>
      </form>
        </Box>
    );
};

export default AddProduct;
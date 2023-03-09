import React from "react";
import { useForm } from "react-hook-form";
import './form.css'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
export default function Form() {
const {register,formState: { errors },handleSubmit,} = useForm();
const onSubmit = (data) => console.log(data);
return (
    <div>
        <a id="contact"></a>
  <div className='contact' style={{paddingTop:"60px",textAlign:"center",fontSize:"30px"}}>Contact</div>
        
<Grid container>
    <Grid sm={4} >
<Typography style={{paddingLeft:"50px",paddingTop:"100px"}}>
<h6 style={{fontSize:"22px"}}>
<LocationOnIcon className='icon1' color='primary' />Address</h6>
<p style={{paddingLeft:"20px",fontSize:"15px"}}> 8,Bhavani nagar 1st street,<br></br> 
pappanayakkan palayam,<br></br>Tirupur-641607.</p>
<br></br>
<p>
<PhoneIcon className='icon1' color='primary' />+91 7339232817</p><br></br>
<p><MailIcon className='icon1' color='primary' />vasanthakumar141@gmail.com</p>
</Typography>
</Grid>
    <Grid sm={4} >
    <div style={{paddingTop:"60px"}}>
<iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.128860529806!2d77.36455824881698!3d11.103772792061099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907c353428c3d%3A0x547ac42eaa04c6af!2sBhavani%20Nagar%20Rd%2C%20Bavani%20Nagar%2C%20Tiruppur%2C%20Tamil%20Nadu%20641604!5e0!3m2!1sen!2sin!4v1654250506387!5m2!1sen!2sin"
width="350" height="320" style={{borderRadius:"10px"}} allowfullscreen="" loading="lazy"
referrerpolicy="no-referrer-when-downgrade"></iframe>
</div> 
    </Grid>
<Grid sm={4}>
<div className="body">
<div className="container">
<div className="card">
<form onSubmit={handleSubmit(onSubmit)} action='#home' >
<div>
</div>
<div>
<label>Name</label>
<input className="i1" style={{marginTop:"40px"}}
{...register("name", { required: true ,
    pattern:/^[a-zA-Z]*$/,
})}
/>
<br></br>

<error>
{errors.name?.type === "required" && "Name is required"}
{errors.name?.type === "pattern" &&
"Number does not exist"}
</error>
</div> 
<div>
<label>Email</label>
<input className="i2"
{...register("email", {
required: true,
pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
})}
/>
<br></br>
<error>
{errors.email?.type === "required" && "Email is required"}
{errors.email?.type === "pattern" &&
"Incorect mail"}
</error>
</div>
<div>
<label>Phone no</label>
<input className="i3"
type="text"
{...register("number", {
minLength: 0-9 ,
maxLength: 10,
required: true,
pattern : /^[0-9]{10}/,
})} 
/>
<br></br>

<error>
{/* {errors.number?.type === "minLength" &&
"Phone number must be 10 digits"} */}

{errors.number?.type === "pattern" &&
"Character does not exist" && "Phone number must be 10 digits"}

{errors.number?.type === "maxLength" &&
"Phone number must be 10 digits"}
{errors.number?.type === "required" &&
"Phone is required"}

</error>
</div>
<div>
{/* <label>Message</label> 

<input type="text"   name="" required className="i4" style={{borderRadius:"5px"}}/>
 <error>
{errors.message?.type ===" " &&" This Field is required "}

</error>   */}
<label>Message</label>
<input className="i4"
{...register("message", {
required: true,
})}
 />
<br></br>
<error >
{errors.message?.type ==="required" &&" This Field is required "}

</error> 
</div>
<div>
<center> <input className="button" type="submit" /></center>
</div>
</form>
</div>
</div>
</div>
</Grid>

</Grid>
</div>
);
}
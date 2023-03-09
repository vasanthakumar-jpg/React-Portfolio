import * as React from 'react';
import './card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import pic1 from './scl1.jpg';
import pic2 from './scl2.jpg';
import pic3 from './scl4.jpg';

import { Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

export default function card() {
return (
<div>
    <a id="education"></a>
<div className='education' style={{paddingTop:"60px"}}>Education</div>
<Grid container item xs={12} style={{height:"600px",paddingTop:"30px"}}>
<Grid sm={4} style={{paddingRight:"8px",marginTop:"10px",transform:"translateY(50px)"}}>
<Card style={{width:"300px",marginLeft:"80px",paddingRight:"30px",borderRadius:"10px",boxShadow:"4px 4px 5px 9px #6041e7"}}className="card1">

<CardMedia
component="img"
height="140"
image={pic1}style={{ marginTop:"10px",marginLeft:"35px",height:"200px",width:"230px",borderRadius:"10px"}}
alt="green iguana" className='pic1'
/>
<CardContent >
<center style={{fontSize:"18px"}}><SchoolIcon color='E4E4E4' style={{fontSize:"40px"}} /></center>
<center style={{fontSize:"18px",fontFamily:"raleway"}}>SSLC 86%</center>
<center style={{fontSize:"18px",marginTop:"5px",fontFamily:"raleway"}}> Vidhyaa Vikas Matric Higher Secondary School</center>  
</CardContent>
</Card>
</Grid> 
<Grid sm={4} style={{paddingRight:"8px",marginTop:"10px",transform:"translateY(50px)"}}>
<Card style={{width:"300px",marginLeft:"40px",paddingRight:"30px",borderRadius:"10px",boxShadow:"4px 4px 5px 9px #6041e7"}}  className="card1">
<CardMedia
component="img"
height="140"
image={pic2}style={{marginTop:"10px",marginLeft:"35px",height:"200px",width:"230px",borderRadius:"10px"}}
alt="green iguana" className='pic2'
/>
<CardContent >
<center style={{fontSize:"18px"}}><SchoolIcon color='E4E4E4' style={{fontSize:"40px"}} /></center>
<center style={{fontSize:"18px",fontFamily:"raleway"}}>HSC 79%</center>
<center style={{fontSize:"18px",marginTop:"5px",fontFamily:"raleway"}}>Vidhyaa Vikas Matric Higher Secondary School</center>  
</CardContent>
</Card>
</Grid>
<Grid sm={4} style={{paddingRight:"8px",marginTop:"10px",transform:"translateY(50px)"}}>
<Card style={{width:"300px",marginRight:"30px",paddingRight:"30px",borderRadius:"10px",boxShadow:"4px 4px 5px 9px #7a62e6"}} className="card1">
<CardMedia
component="img"
height="140"
image={pic3}style={{marginTop:"10px",marginLeft:"35px",height:"200px",width:"230px",borderRadius:"10px"}}
alt="green iguana" className='pic3'
/>
<CardContent >
<center style={{fontSize:"18px"}}><SchoolIcon color='E4E4E4' style={{fontSize:"40px"}} /></center>
<center style={{fontSize:"18px",fontFamily:"raleway"}}>CGPA 6.95%</center>
<center style={{fontSize:"18px",marginTop:"5px",fontFamily:"raleway"}}>Nandha Engineering College of Autonomous </center>  

</CardContent>
</Card>
</Grid>   
</Grid>   
</div>
);
}




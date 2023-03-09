import { Grid } from '@mui/material';
import React from 'react';
import './about.css'
// import Grid from '@mui/material/Grid';
import Temp from '../components/Temp.png';
import { Typography } from '@mui/material';
// import {Button} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon  from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import DownloadIcon from '@mui/icons-material/Download';
import Resume from './Resume.pdf';
import { TimelapseRounded } from '@mui/icons-material';



function About() {
return (
<div>
<a id="about"></a>
<div className='abme' style={{paddingTop:"50px",textAlign:"center",fontSize:"30px"}}>About Me</div>
<Grid container  style={{height:"450px"}} >

<Grid sm={6 } className="Agrid1">
<img src={Temp} alt="" width="350px" height="360px" style={{marginLeft:"40px",marginTop:"30px"}} />
<Typography className='icon' style={{backgroundColor:"#212637",height:"40px",width:"270px",fontSize:"30px",borderRadius:"10px",marginLeft:"70px",marginTop:"20px"}}>
<a href='https://www.facebook.com/vasanthvasu.vasanthvasu.98' style={{textDecoration:"none"}}><FacebookIcon className='icon1' color='primary' style={{marginLeft:"25px",fontSize:"30px",backgroundColor:"white",borderRadius:"7px",marginBottom:"10px"}}/></a>
 <a href="https://www.instagram.com/vasanth_vasu_vv/" style={{textDecoration:"none"}}> <InstagramIcon className='icon2' color='error'  style={{marginLeft:"25px",fontSize:"30px",backgroundColor:"white",borderRadius:"7px" ,marginBottom:"10px"}}/></a>
 <a href="https://twitter.com/home" style={{textDecoration:"none"}}> <TwitterIcon className='icon3' color='primary' style={{marginLeft:"25px",fontSize:"30px",backgroundColor:"white",borderRadius:"7px",marginBottom:"10px"}}/></a>
 <a href="https://www.whatsapp.com/download//?lang=da" style={{textDecoration:"none"}}> <WhatsAppIcon className='icon4' color='success' style={{marginLeft:"25px",fontSize:"30px",backgroundColor:"white",borderRadius:"7px",marginBottom:"10px"}}/></a>
</Typography>
  </Grid>
<Grid sm={6} style={{marginTop:"10px",paddingRight:"30px"}}  className="ab2">
<Typography  style={{marginTop:"10px",marginRight:"20px"}}>
I am outgoing, dedicated, and open-minded. I get across to people and adjust to changes with ease.
I believe that a person should work on developing their professional skills and learning new things all the time.
Currently, I am looking for new career opportunities my current job position cannot provide.
</Typography>
<br></br>



<Typography paragraph>
Name<span style={{paddingLeft:"60px"}}>: Vasanthakumar R</span>
</Typography> 



<Typography paragraph>
Age<span style={{paddingLeft:"75px"}}>: BE CSE</span>
</Typography> 

<Typography paragraph>
Age<span style={{paddingLeft:"75px"}}>: 23</span>
</Typography> 

<Typography paragraph>
Date of Birth <span style={{paddingLeft:"8px"}}>:14/10/1999</span>

</Typography>    
<Typography paragraph>
Phone <span style={{paddingLeft:"52px"}}>: 7339232817</span>
</Typography> 
<Typography paragraph>
Mail <span style={{paddingLeft:"68px"}}>: vasanthakumar141099@gmail.com</span>
</Typography>   
<Typography paragraph>
Native <span style={{paddingLeft:"51px"}}>: Tirupur</span>
</Typography>
<button style={{borderRadius:"10px",height:"30px",width:"140px"}}><a href={Resume} download > Downoad CV <DownloadIcon/></a></button>
</Grid>

</Grid>
</div>
)
}
export default About;

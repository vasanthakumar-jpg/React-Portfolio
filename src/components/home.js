import  React from 'react';
import './home.css';
import Grid from '@mui/material/Grid';
import H from '../components/H.webp';
import { Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon  from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

 
function Home() {

  return (
    
    <div className='home'>
      <a id="home"></a>
<Grid container item xs={12} style={{height:"630px"}}>

  <Grid container sm={6} style={{width:"100%",marginTop:"30px"}} className="grid1">
<img src={H} alt="" width="700px" height="628px" />
  </Grid>

     <Grid container sm={6}style={{paddingTop:"200px",height:"660px"}} className="grid2">
     <Typography>
      <h2 > Hello I'm </h2>
      <h3>Vasanthakumar R</h3>
      <h5>The My Profile API is a set of methods that allows user <br></br>
       related information to be displayed on the "my profile page". </h5>
       <a href="https://www.facebook.com/vasanthvasu.vasanthvasu.98" style={{textDecoration:"none"}}><FacebookIcon color='primary' style={{marginLeft:"20px",marginTop:"10px"}}/></a>
       <a href="https://www.instagram.com/vasanth_vasu_vv/" style={{textDecoration:"none"}}><InstagramIcon color='error' style={{marginLeft:"20px",marginTop:"10px"}}/></a>
       <a href="https://twitter.com/home" style={{textDecoration:"none"}}> <TwitterIcon color='primary' style={{marginLeft:"20px",marginTop:"10px"}}/></a>
       <a href="https://www.whatsapp.com/download//?lang=da" style={{textDecoration:"none"}}> <WhatsAppIcon  color='success' style={{marginLeft:"20px",marginTop:"10px"}}/>  </a>
       </Typography>
  </Grid> 
  </Grid>
    </div>
  )}
  export default Home;


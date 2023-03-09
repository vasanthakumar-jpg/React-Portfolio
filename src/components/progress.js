import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Progress() {
  return ( <div> 
    <a id="skills"></a>
<div className='abme' style={{paddingTop:"70px",paddingBottom:"20px",textAlign:"center",fontSize:"30px"}}>Skills</div>
<div style={{height:"500px",width:"100%",overflow:"hidden"}}>
  <h6 style={{marginLeft:"200px",transform:"translateY(20px)"}} >HTML</h6>
  <h6 style={{marginLeft:"700px",transform:"translate(250px,-10px)"}}>45%</h6>
<ProgressBar now={45} animated variant="success" style={{fontSize:"15px",color:"primary",width:"60%",marginLeft:"200px",textAlign:"center",transform:"translateY(-10px)"}} /><br></br>
<h6 style={{marginLeft:"200px",transform:"translateY(20px)"}} >CSS</h6>
<h6 style={{marginLeft:"700px",transform:"translate(250px,-10px)"}}>60%</h6>
<ProgressBar now={60} animated variant="success" style={{fontSize:"15px",color:"primary",width:"60%",marginLeft:"200px",transform:"translateY(-10px)"}} />
<br></br><br></br>
<h6 style={{marginLeft:"200px",transform:"translateY(20px)"}} >React</h6>
<h6 style={{marginLeft:"700px",transform:"translate(250px,-10px)"}}>75%</h6>
<ProgressBar now={75} animated variant="success" style={{fontSize:"15px",color:"primary",width:"60%",marginLeft:"200px",transform:"translateY(-10px)"}} />
<br></br>
<h6 style={{marginLeft:"200px",transform:"translateY(20px)"}} >Bootstrap</h6>
<h6 style={{marginLeft:"700px",transform:"translate(250px,-10px)"}}>80%</h6>
<ProgressBar now={80} animated variant="success" style={{fontSize:"15px",color:"primary",width:"60%",marginLeft:"200px",transform:"translateY(-10px)"}} />
<br></br>
<h6 style={{marginLeft:"200px",transform:"translateY(20px)"}} >Javasscript</h6>
<h6 style={{marginLeft:"700px",transform:"translate(250px,-10px)"}}>55%</h6>
<ProgressBar now={55} animated variant="success" label={"55%"} style={{fontSize:"15px",color:"primary",width:"60%",marginLeft:"200px",transform:"translateY(-10px)"}} />
<br></br><br></br>
</div>
  </div>
)};

export default Progress;

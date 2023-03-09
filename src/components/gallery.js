import React from 'react'
import './gallery.css';
import"react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import p from '../components/s13.jpg';
import pi from '../components/scl1.jpg';
import pic from '../components/s6.webp';
import pict from '../components/s7.webp';
import pictu from '../components/s8.jpg';
import picture from '../components/s22.jpg';
// import { height } from '@mui/system';

function Gallery () {
  return (
    <div>
      <a id="gallery"></a>

  <div className='abme' style={{paddingTop:"60px",textAlign:"center",fontSize:"30px"}}>Gallery</div>

        <Carousel infiniteLoop autoPlay>
            <div className='image' >
            <img src={p} alt=""  />
            </div>
            <div className='image' >
            <img src={pi} alt="" />
            </div>
            <div className='image'>
            <img src={pic} alt="" />
            </div>
            <div className='image'>
            <img src={pict} alt="" />
            </div>
            <div className='image'>
            <img src={pictu} alt=""/>
            </div>
            <div className='image'>
            <img src={picture} alt="" />
            </div>
        </Carousel>
    </div>
  )
}

export default Gallery;
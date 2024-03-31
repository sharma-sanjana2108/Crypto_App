import { Button, Container, Typography, colors } from '@mui/material'
import '../styles/heroSection.css'
import banner6 from "../assets/banner6.jpg"
import WhyUs from './WhyUs'
import Portfolio from './Portfolio'
import Faq from './faq'
import { Link } from 'react-router-dom'



const HeroSection = () => {

  return (
    <>
   <div className="hero-section">

   <div className="hero-part">
   
   <div style={{color:"white", fontSize:"36px", maxWidth: "550px", marginLeft: "60px"}} >
        
        <Typography variant='h3' style={{fontFamily: 'Barlow Condensed, sans-serif'}}>
          "Unlock effortless CRYPTO investing"
        </Typography> 

        <Typography variant='h5' style={{fontFamily: 'Montserrat, sans-serif'}}>
           – simplicity at your fingertips, transforming the way you navigate digital assets.
           </Typography>

        <Link to={'/coincontainer'}><Button id='investing' color='secondary' >Start investing</Button></Link>
            </div>
         
           <div className="image-section">
           <img id='blue-img' src={banner6} alt="" />
           </div>
         
          
   </div>
   
   </div>

        {/* Other components */}
  

     <WhyUs/>
    <Portfolio/>
    <Faq/>
   

      
    </>
  )
}

export default HeroSection

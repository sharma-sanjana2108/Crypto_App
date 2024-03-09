import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import w1 from "../assets/w1.png"
import w2 from "../assets/w2.png"
import w3 from "../assets/w3.png"
import w4 from "../assets/w4.png"


const WhyUs = () => {
  return (
    <>

    <Container sx={{ backgroundColor: 'black', color: 'white', marginTop: '5px'  }} >

        <Typography className='why-section' textAlign={"center"} variant='h3'>

        Why Choose<span style={{ fontWeight: 'bold', color: 'blue' }}> Us</span>
        
        </Typography>

        <Grid>

      <Grid  item>
        <Box  textAlign={"center"} sx={{marginTop: '40px'}}>
         <img id='w1' src={w1} alt="" />
         <Typography textAlign={"center"} variant='h4'>
         Expert Management
        </Typography>
        <Typography className='why-para' textAlign={"center"} variant='h6'>"Welcome to Expert Management, your trusted partner in the dynamic world of cryptocurrency.
         Our seasoned team of experts is dedicated to providing comprehensive solutions for crypto enthusiasts and investors. From strategic portfolio management to insightful market analysis, we empower you to navigate the digital currency landscape with confidence.
        Unlock the potential of your crypto journey with Expert Management – where expertise meets innovation."</Typography>
        </Box>
      </Grid>

      <Grid item>
        <Box textAlign={"center"} sx={{padding: 2 }} >
           <img id='w3' src={w3} alt="" />
           <Typography textAlign={"center"} variant='h4'>
           Instant Trading
        </Typography>
        <Typography textAlign={"center"} variant='h6'>"Experience instant trading with our cutting-edge platform. Seize opportunities in real-time with lightning-fast execution. 
            Our user-friendly interface and advanced technology ensure a seamless trading experience. Choose us for swift, secure, and efficient cryptocurrency transactions."</Typography>
        
        </Box>
      </Grid>
      <Grid item>
        <Box textAlign={"center"} sx={{padding: 2 }}>
        <img id='w2' src={w2} alt="" />
        <Typography textAlign={"center"}  variant='h4'>
        Secure Investment
        </Typography>
        <Typography textAlign={"center"} variant='h6'>"Choose us for secure investment in the ever-evolving world of cryptocurrency. Our platform prioritizes your financial safety through robust security measures, ensuring your investments are protected.
             Trust in our commitment to providing a secure environment for your crypto journey."</Typography>
        </Box>
      </Grid>

      
      
      <Grid item>
        <Box textAlign={"center"} sx={{padding: 2 }} >
        <img id='w4' src={w4} alt="" />
        <Typography textAlign={"center"} variant='h4'>
        Happy Customers
        </Typography>
             <Typography textAlign={"center"} variant='h6'>"Discover the reasons our customers are consistently happy – from our user-friendly interface to our commitment to transparency,
             making us the preferred choice in the crypto space."</Typography>
        </Box>
      </Grid>
    </Grid>

    </Container>
      
    </>
  )
}

export default WhyUs;

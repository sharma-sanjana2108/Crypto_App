import { Box, List, ListItem, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import React from 'react'

const Footer = () => {
  return (
    <>

<Box 
      component="footer"
      sx={{
        backgroundColor: 'black', display: 'flex', justifyContent: 'space-around', alignItems: 'center',
        padding: '20px', 
        marginTop: 'auto'
      }}
    >


      <List sx={{ display: 'flex', justifyContent: 'space-between', 
      marginTop: 2, alignItems: 'center', flexDirection: 'column', color: 'grey'}}>
        <ListItem className='footer-content' sx={{ padding: 0, marginBlock: '5px' }}>

        <Typography variant='h6' color={'white'}>Follow us on :</Typography>


<Typography sx={{ marginBottom: '30px'}}>
 <span style={{ fontWeight: 'bold', color: 'white'}}>    
 <InstagramIcon sx={{marginInline: '5px'}} fontSize='small'/>
 <TwitterIcon sx={{marginInline: '5px'}} fontSize='small'/>
 <FacebookIcon sx={{marginInline: '5px'}} fontSize='small'/>
 <LinkedInIcon sx={{marginInline: '5px'}} fontSize='small'/>
 <YouTubeIcon sx={{marginInline: '5px'}} fontSize='small'/>
 </span> 
 </Typography>

 <Typography  variant="h6" className='support-part'>
<Typography>Need Help?</Typography>
<Typography>support@crypto.com</Typography>
<Typography>1800-202-4849</Typography>
 </Typography>

        
        </ListItem>
     
      </List>

      <List className='services-footer' sx={{color: 'grey'}}>
        <ListItem sx={{ padding: 0, margin: 0 }}>
          <Typography variant="h5" color={"white"}>
           Services
          </Typography>
        </ListItem>
        <ListItem sx={{ padding: 0, marginBlock: '5px' }}>
        
          Download
     
        </ListItem>


        <ListItem sx={{ padding: 0, marginBlock: '5px' }}>
      
          Historical market data
    
        </ListItem>

        <ListItem sx={{ padding: 0, marginBlock: '5px' }}>
         
          Affiliate
        
        </ListItem>

        <ListItem sx={{ padding: 0, marginBlock: '5px' }}>
         
          Fee Schedule
   
        </ListItem>

        <ListItem sx={{ padding: 0, marginBlock: '5px'}}>
         
          Listing Application
          
        </ListItem>

        <ListItem sx={{ padding: 0, marginBlock: '5px' }}>
        
          Market Maker Program
         
        </ListItem>
        <ListItem sx={{ padding: 0, marginBlock: '5px' }}>
        
            Trade
       
        </ListItem>
     
      </List>

      <List className = 'buycrypto-footer' sx={{color: 'grey'}}>
        <ListItem sx={{ padding: 0, margin: 0 }}>
          <Typography variant="h5" color={"white"}>
            Buy CRYPTO
          </Typography>
        </ListItem>
        <ListItem sx={{ padding: 0, marginBlock: '5px' }}>
         
           Browse Crypto Prices
       
        </ListItem>

        <ListItem sx={{ padding: 0, marginBlock: '5px' }}>
       
          Gift Card
        
        </ListItem>

        <ListItem sx={{ padding: 0, marginBlock: '5px' }}>
        
            Announcements
        
        </ListItem>
        <ListItem sx={{ padding: 0, marginBlock: '5px' }}>
        
            Exchange
      
        </ListItem>
        <ListItem sx={{ padding: 0, marginBlock: '5px' }}>
       
            Convert
        
        </ListItem>
        <ListItem sx={{ padding: 0, marginBlock: '5px' }}>
        
            TradingView
        
        </ListItem>
        <ListItem sx={{ padding: 0, marginBlock: '5px' }}>
    
           All cryptocurrencies
      
        </ListItem>
     
      </List>

      <List className='support-footer' sx={{color: 'grey'}}>
        <ListItem sx={{ padding: 0, margin: 0 }}>
          <Typography variant="h5" color={"white"}>
          Support
          </Typography>
        </ListItem>
        <ListItem sx={{ padding: 0, marginBlock: '5px' }}>
         
          Terms of service
         
        </ListItem>
        <ListItem sx={{ padding: 0, marginBlock: '5px' }}>
        
          Help Center
       
        </ListItem>
        <ListItem sx={{ padding: 0, marginBlock: '5px' }}>
         
          Privacy Policy
 
        </ListItem>

        <ListItem sx={{ padding: 0, marginBlock: '5px' }}>
         
          Contact Us

        </ListItem>

        <ListItem sx={{ padding: 0, marginBlock: '5px' }}>
         
          Security
         
        </ListItem>

        <ListItem sx={{ padding: 0, marginBlock: '5px' }}>
       
            Trading Rules
        
        </ListItem>
        <ListItem sx={{ padding: 0, marginBlock: '5px' }}>
          
            Disclosures
       
        </ListItem>
     
      </List>

    
     
    </Box>

    <div className="lower-footer">
        
        </div>

        <span><h6>Copyrights @Crypto App. All rights Reserved</h6></span>


      
    </>
  )
}

export default Footer;

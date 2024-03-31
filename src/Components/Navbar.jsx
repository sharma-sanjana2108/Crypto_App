import { AppBar, Box, Button, Hidden, List, ListItem, Toolbar, Typography } from '@mui/material'
import '../styles/navbar.css'
import React from 'react'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { Link } from 'react-router-dom'
import coinlogo from '../assets/coinlogo.png'


const Navbar = () => {


  return (
    <Box className='responsive-navbar'>

      <AppBar sx={{ backgroundColor: "#000001", fontFamily: 'Lato, sans-serif' }}>
        <Toolbar >


          <Typography sx={{ flexGrow: 1 }} variant='h5'><Link to={'/'} style={{color: 'white'}}>
            <img id='logo-img' src={coinlogo} alt="" />
            CRYPTOFY
          </Link>
          </Typography>

       <Hidden mdDown>

       <List  style={{ display: 'flex', width: '310px', fontSize: '20px' }}>
          
          <Link to={'/whyus'}><ListItem>Why Us</ListItem></Link>
          <Link to={'/portfolio'}><ListItem>Portfolio</ListItem></Link>
          <Link to={'/faq'}><ListItem>FAQs</ListItem></Link>

        </List>
       </Hidden>

      
              <Link to={"/coincontainer"}>
              <Button id='trending'><CurrencyBitcoinIcon/>Top Trending Coins</Button>
            </Link>
  

        </Toolbar>

      </AppBar>
    </Box>

  )
}

export default Navbar;

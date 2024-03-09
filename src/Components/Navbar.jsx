import { AppBar, Box, Button, Hidden, List, ListItem, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import coinlogo from '../assets/coinlogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../features/crypto/cryptoSlice'


const Navbar = () => {

  const { user } = useSelector((state) => state.crypto);

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <Box>

      <AppBar position='static' color='primary' sx={{ backgroundColor: "#000001", fontFamily: 'Lato, sans-serif' }}>
        <Toolbar className='responsive-navbar'>


          <Typography sx={{ flexGrow: 1 }} variant='h5'><Link to={'/'} style={{textDecoration: 'none', color: 'white'}}>
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

        
        
      
        {
            user ? (
              <>
              <Link to={"/coincontainer"}>
              <Button sx={{marginRight: '18px'}} id='trending' variant='contained'>Top Trending Coins</Button>
            </Link>
              <Button id='logout-btn' variant='outlined ' color='error' onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <>
                <Link to={"/login"}><Button id='login-btn' variant="contained ">Login</Button>
                </Link>

              </>
            )
          }
        

        </Toolbar>

      </AppBar>
    </Box>

  )
}

export default Navbar;

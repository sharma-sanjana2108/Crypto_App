import React, { useEffect } from 'react'
import CoinCard from './CoinCard'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@mui/material'
import { getCoins } from '../../features/crypto/coinSlice'
import { useNavigate } from 'react-router-dom'

const CoinContainer = () => {

    const {coins, isLoading, isError, isSuccess} = useSelector(state => state.tradeCoins)

    const {user} = useSelector((state) => state.crypto)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getCoinsData = () => {
      dispatch(getCoins())
    }

    useEffect(() => {
      getCoinsData()
    }, [])

    if(!user){
navigate('/login')
    }

    if (isLoading) {
      return (
        <div className="container-fluid d-flex align-item-center justify-content-center my-5">
<div className="spinner"></div>
</div>
      );
    }


  return (
    <>

     <Grid container sx={{padding: '60px'}} spacing={2}>

     {
       coins.map((coin => <CoinCard key={coin.item.coin_id} coin={coin}/> ))
     } 

     </Grid>
  
    
      
    </>
  )
}

export default CoinContainer;

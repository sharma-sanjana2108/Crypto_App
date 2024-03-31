import React, { useEffect } from 'react'
import CoinCard from './CoinCard'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@mui/material'
import { getCoins } from '../../features/crypto/coinSlice'


const CoinContainer = () => {

    const {coins, isLoading, isError, isSuccess} = useSelector(state => state.tradeCoins)


    const dispatch = useDispatch()


    const getCoinsData = () => {
      dispatch(getCoins())
    }

    useEffect(() => {
      getCoinsData()
    }, [])



    if (isLoading) {
      return (
        <div className="container-fluid d-flex align-item-center justify-content-center my-5">
<div className="spinner"></div>
</div>
      );
    }


  return (
 

     <Grid container sx={{padding: 12}} spacing={5}>

     {
       coins.map((coin => <CoinCard key={coin.item.coin_id} coin={coin}/> ))
     } 

     </Grid>
  
    
      

  )
}

export default CoinContainer;

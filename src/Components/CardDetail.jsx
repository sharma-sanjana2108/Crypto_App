import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/coinCard.css'
import { useParams } from 'react-router-dom'
import { getCoins } from '../../features/crypto/coinSlice'
import { useEffect } from 'react'
import BackButton from './BackButton'

const CardDetail = () => {

  const {ID} = useParams()
  const {coins} = useSelector((state) => state.tradeCoins)

  const dispatch = useDispatch()

  const fetching = () => {
    dispatch(getCoins())
  }

  useEffect(() => {
    fetching()
  }, [])


  const itemDetail = coins.filter((coin) => coin.item.coin_id === Number(ID))[0]
  ?.item;
 


  return (

   <>

   <BackButton location={'/coincontainer'}/>

    <Card className='single-container' sx={{ display: 'flex', maxWidth: 800, marginBottom: 8, marginLeft: 5}}>
    
        <CardMedia id='single-coin'
          component="img"
        
          image={itemDetail?.large}
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{fontWeight: "Bold", fontSize: "25px", color: "black"}} gutterBottom variant="h5" component="div">
       Name : {itemDetail?.name}
          </Typography>

          <Typography sx={{fontWeight: "Bold", fontSize: "20px", color: "black"}} variant="body2" color="text.secondary">
         Symbol : {itemDetail?.symbol}
          </Typography>

          <Typography sx={{fontWeight: "Bold", fontSize: "20px", color: "black"}} variant="body2" color="text.secondary">
         Price_btc : {itemDetail?.price_btc}
          </Typography>

          <Typography sx={{fontWeight: "Bold", fontSize: "20px", color: "black"}} variant="body2" color="text.secondary">
         Market_cap_rank : {itemDetail?.market_cap_rank}
          </Typography>

          <Typography sx={{fontWeight: "Bold", fontSize: "20px", color: "black"}} variant="body2" color="text.secondary">
         Slug : {itemDetail?.slug}
          </Typography>

        </CardContent>
     
      <CardActions>

      </CardActions>
    </Card>
    </>
  )
}

export default CardDetail;

import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCoins } from '../../features/crypto/coinSlice'
import { useEffect } from 'react'

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
  // console.log(itemDetail)


  return (

    <Grid item lg={4} md={6} sm={12} xs={12}>
    <Card sx={{ maxWidth: 800, marginBlock: 8, marginLeft: 2}}>
      
        <CardMedia
          component="img"
          height="140"
          image={itemDetail?.large}
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{fontWeight: "Bold", fontSize: "18px", color: "black"}} gutterBottom variant="h5" component="div">
       Name : {itemDetail?.name}
          </Typography>

          <Typography sx={{fontWeight: "Bold", fontSize: "18px", color: "black"}} variant="body2" color="text.secondary">
         Symbol : {itemDetail?.symbol}
          </Typography>

          <Typography sx={{fontWeight: "Bold", fontSize: "18px", color: "black"}} variant="body2" color="text.secondary">
         Price_btc : {itemDetail?.price_btc}
          </Typography>

          <Typography sx={{fontWeight: "Bold", fontSize: "18px", color: "black"}} variant="body2" color="text.secondary">
         Market_cap_rank : {itemDetail?.market_cap_rank}
          </Typography>

          <Typography sx={{fontWeight: "Bold", fontSize: "18px", color: "black"}} variant="body2" color="text.secondary">
         Slug : {itemDetail?.slug}
          </Typography>

        </CardContent>
     
      <CardActions>

      </CardActions>
    </Card>
    </Grid>
  )
}

export default CardDetail;

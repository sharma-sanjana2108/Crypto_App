import { Grid, Typography, CardMedia, CardContent, CardActions, Card, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import '../styles/coinCard.css'

const CoinCard = ({coin}) => {

  const{symbol, name, large, coin_id} = coin.item
 
  return (

    <Grid item lg={4} md={4} sm={6} xs={12}>
       
        <Card sx={{backgroundColor: "black"}}>
      <CardMedia className='card-img' image={large} title="green iguana"/>
      <CardContent className='card-content'>
        <Typography gutterBottom variant="h5" component="div">
          {symbol}
        </Typography>
        <Typography sx={{ fontSize: "20px"}} variant="body2">
          {name}
        </Typography>
      </CardContent>
  
     
        <Link to={`/learnmore/${coin_id}`}>
        <Button id='learn-more' sx={{fontWeight: "Bold", fontSize: "15px"}} size="small">Learn More</Button>
        </Link>
       
   
    </Card>
      </Grid>
      


  )
}

export default CoinCard;

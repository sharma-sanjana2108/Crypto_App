import { Grid, Typography, CardMedia, CardContent, CardActions, Card, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const CoinCard = ({coin}) => {

  const{symbol, name, large, coin_id} = coin.item
 
  return (

    <Grid item lg={4} md={6} sm={12}>
       
        <Card>
      <CardMedia sx={{ height: 140 }} image={large} title="green iguana"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {symbol}
        </Typography>
        <Typography sx={{ fontSize: "16px", color: "black"}} variant="body2" color="text.secondary">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
     
        <Link to={`/learnmore/${coin_id}`}>
        <Button sx={{fontWeight: "Bold", fontSize: "15px"}} size="small">Learn More</Button>
        </Link>
       
      </CardActions>
    </Card>
      </Grid>
      


  )
}

export default CoinCard;

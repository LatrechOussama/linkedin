import  React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import Avatarr from './Avatarr';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        // alt="green iguana"
        height="75"
        image="detailed-abstract-white-background_79603-1734.jpg"
      />
      <CardContent><Avatarr />
        <Typography gutterBottom variant="h5" component="div">
       
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <h2>Oussama LAtrech </h2>
         <hr />
         <div style={{display :'flex' , justifyContent:'space-around'}}>
 <p >Relation<br/>developpez votre reseau </p>
 <img src="add-user.png" alt="add" style={{height:'20px' , width:'20px' , marginTop:'20px'}} />
         </div>
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}

// CardComponent.js
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const CardComponent = ({ image, title }) => {
  return (
    <Card 
      sx={{ 
        maxWidth: 250, 
        marginLeft: 5, 
        marginTop: 3, 
        backgroundColor: '#D4E6F1', 
        color: '#000', 
        transition: 'transform 0.1s', // Smooth transition
        '&:hover': {
          transform: 'scale(1.07)' // Zoom effect
        },
        cursor:'pointer'
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;

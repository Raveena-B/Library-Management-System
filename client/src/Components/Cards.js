// CardComponent.js
import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const CardComponent = ({ image, title }) => {
  return (
    <Card
      sx={{
        maxWidth: 350,
        margin: 2,
        backgroundColor: "#D4E6F1",
        color: "#000",
        transition: "transform 0.1s", // Smooth transition
        "&:hover": {
          transform: "scale(1.07)", // Zoom effect
        },
        cursor: "pointer",
      }}
    >
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "center" }}
        >
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

const NewsCard = ({ image, newstitle, newsdate ,newsdescription }) => {
  return (
    <Card
      sx={{
        maxWidth: 400,
        height: 450,
        margin: 2,
        backgroundColor: "#D4E6F1",
        color: "#000",
        transition: "transform 0.1s",
        "&:hover": {
          transform: "scale(1.07)",
        },
        cursor: "pointer",
      }}
    >
      <CardMedia
        sx={{ height: 200 }}
        image={image}
        newstitle={newstitle}
        newsdate={newsdate}
        newsdescription={newsdescription}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ textAlign: "center"}}
        >
          {newstitle} <br />
          {newsdate}
        
        </Typography>
        <Typography
        variant="p"
        textAlign="justify"
        component="div"
         sx={{textAlign:"justify" , padding:"0px 20px" }}
         >
           {newsdescription}
         </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ marginLeft: 30 }}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

const EventCard = ({ image, eventtitle, eventdate ,eventdescription }) => {
  return (
    <Card
      sx={{
        maxWidth: 400,
        height: 450,
        margin: 2,
        backgroundColor: "#D4E6F1",
        color: "#000",
        transition: "transform 0.1s",
        "&:hover": {
          transform: "scale(1.07)",
        },
        cursor: "pointer",
      }}
    >
      
      <CardMedia
        sx={{ height: 200 }}
        image={image}
        eventtitle={eventtitle}
        eventdate={eventdate}
        eventdescription={eventdescription}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ textAlign: "center" }}
        >
          {eventtitle} <br />
          {eventdate}
          
        </Typography>
        <Typography
        variant="p"
        textAlign="justify"
        component="div"
         sx={{textAlign:"justify" , padding:"0px 20px" }}
         >
           {eventdescription}
         </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ marginLeft: 30 }}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

const NoticeCard = ({ noticetitle, noticedescription }) => {
  return (
    <Card
      sx={{
        width: '100%', // Full width
        margin: '20px auto', // Centered with margin
        backgroundColor: "#D4E6F1",
        color: "#000",
        cursor: "pointer",
      }}
    >
      
      <CardContent>
        <Typography
          // gutterBottom
          variant="p"
          padding="10px 10px"
          textAlign="justify"
          component="div"
          sx={{ textAlign: "center", height: 150 ,fontWeight:"bold",marginBottom:"10px" , }}
        >
          {noticetitle} 
          <Typography/>
          <Typography 
          varient="bold1"

          sx={{marginBottom:"10px" ,textAlign:"justify" , marginTop:"20px", padding:"10px 50px"}}
          >
          {noticedescription}
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  )
};

export { CardComponent, NewsCard, EventCard, NoticeCard };

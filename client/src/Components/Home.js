import React from "react";
import "./style.css";
import { CardComponent, NewsCard, EventCard, NoticeCard } from "./Cards";
import image1 from "../asserts/images/repo.png";
import image2 from "../asserts/images/pp.jpg";
import image3 from "../asserts/images/research.jpg";
import image4 from "../asserts/images/research.jpg";
import image5 from "../asserts/images/library.jpg";
import image6 from "../asserts/images/1.jpg";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <div >
       <img src={image6} alt="library banner" className="header-image" />
      <div
        className="row"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <CardComponent image={image1} title="Repository NIPM" />
        <CardComponent image={image2} title="Past Papers NIPM" />
        <CardComponent image={image3} title="Research Support" />
        <CardComponent image={image4} title="Another Repository" />
      </div>
      <div className="row" style={{ backgroundColor: "#939596 " , marginTop:"30px" , borderRadius:"10px"}}>
        <div className="column">
          <img
            src={image5}
            style={{
              padding: "20px 40px",
              maxWidth: "550px",
              marginLeft: "10px",
            }}
          />
        </div>
        <div className="column">
          <h2 className="title-welcome">Welcome to NIPM Library</h2>
          <p className="para-welcome">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      {/* <Button size="small" sx={{ marginLeft: 130, marginTop: 10 }}>
        Read More
      </Button> */}

      <div className="row" style={{ marginTop: "20px" }}>
        <h1 style={{ marginLeft: "20px" }}>Latest News Updates</h1>
        <div
          className="row"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <NewsCard
            image={image1}
            newstitle="Latest News 1"
            newsdate="2024/03/01"
            newsdescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
            unknown printer took a galley of ."
          />
          <NewsCard
            image={image2}
            newstitle="Latest News 2"
            newsdate="2024/03/01"
            newsdescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
            unknown printer took a galley of ."
          
          />
          <NewsCard
            image={image3}
            newstitle="Latest News 3"
            newsdate="2024/03/01"
            newsdescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
            unknown printer took a galley of ."
          
          />
        </div>
      </div>

      <div className="row" style={{ marginTop: "20px" }}>
        <div
          className="row"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <EventCard
            image={image1}
            eventtitle="Event 1"
            eventdate="2024/03/01"
            eventdescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
            unknown printer took a galley of ."
             />
          <EventCard
            image={image2}
            eventtitle="Event 2"
            eventdate="2024/03/01"
            eventdescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
            unknown printer took a galley of ."
          />
          <EventCard
            image={image3}
            eventtitle="Event 3"
            eventdate="2024/03/01"
            eventdescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
            unknown printer took a galley of ."
          />
        </div>
        <h1 style={{ marginLeft: "20px" }}>Library Events</h1>
      </div>
     
      <div style={{ marginTop: "20px" }}>
      <h1 style={{ marginLeft: "20px" , textAlign:"center" , padding:"20px 20px"}}>Notice To Students</h1>
        <NoticeCard
          noticetitle="Library Is Under Maintainance"
          noticedescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import CardComponent from "./Cards";
import image1 from "../asserts/images/1.jpg";
import image2 from "../asserts/images/2.png";

const Home = () => {
  return (
    <div className="row" sx={{ml:5,}}>
      <div className="column">
        <CardComponent image={image1} title="Repository NIPM" />
      </div>
      <div className="column">
        <CardComponent image={image2} title="Past Papers NIPM" />
      </div>
      <div className="column">
        <CardComponent image={image2} title="Research Support " />
      </div>
      <div className="column">
        <CardComponent image={image2} title="Another Repository" />
      </div>
    </div>
  );
};

export default Home;

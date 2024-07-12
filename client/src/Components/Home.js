import React from "react";
import { CardComponent, NewsCard } from "./Cards";
import image1 from "../asserts/images/repo.png";
import image2 from "../asserts/images/pp.jpg";
import image3 from "../asserts/images/research.jpg";
import image4 from "../asserts/images/research.jpg";

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <div className="row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        <CardComponent image={image1} title="Repository NIPM" />
        <CardComponent image={image2} title="Past Papers NIPM" />
        <CardComponent image={image3} title="Research Support" />
        <CardComponent image={image4} title="Another Repository" />
      </div>
      <div style={{ marginTop: '20px' }}>
        <h3 style={{ marginLeft: '20px' }}>Latest News</h3>
        <div className="row" style={{}}>
          <NewsCard image={image1} title="Latest News 1" />
          <NewsCard image={image2} title="Latest News 2" />
          <NewsCard image={image3} title="Latest News 3" />
         
        </div>
      </div>
    </div>
  );
};

export default Home;

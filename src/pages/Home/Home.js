import { React, useEffect } from "react";
import Images from "../../config/Images";
import Clients from "../../components/Client/Clients";
import Discover from "../../components/Discover/Discover";
import OurGame from "../../components/OurGame/OurGame";
import "./Home.css";
function Home() {
  useEffect(() => {
    document.title = "Home - SOFTFUN";
  });

  return (
    <div className="homePage">
      <div className="intro block">
        <div className="content">
          <h4 id="slogan">Creative IDEA, PLAY FOR FUN</h4>
          <h1 className="namecp-hp">SOFTFUN Games</h1>
          <p id="slogan2">
            Our games are vibrant worlds with charming characters
          </p>
        </div>
        <div className="backgroundHome">
          <img src={Images.piggy} alt="" />
        </div>
        <div className="backgroundHome-mobile">
          <img style={{ height: 278, width: 230 }} src={Images.piggy} alt="" />
        </div>
      </div>
      <Discover></Discover>
      <OurGame></OurGame>
      <div className="Company block pd">
        <h2>
          Life at <span className="style-text">SOFTFUN</span>
        </h2>
        <p>Our employees can work from anywhere in the world</p>
        <div className="companyBG">
          <img src={Images.christmas} alt="" />
          <button className="btn-primary">See more</button>
        </div>
      </div>
      <Clients></Clients>
    </div>
  );
}

export default Home;

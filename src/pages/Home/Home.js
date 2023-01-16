import { React, useEffect } from "react";
import Images from "../../config/Images";
import Clients from "../../components/Client/Clients";
import Discover from "../../components/Discover/Discover";
import OurGame from "../../components/OurGame/OurGame";
import "./Home.css";
function Home() {
  useEffect(() => {
    document.title = "Home - Softfun";
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
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
          <img src={Images.piggy} alt="" className="piggy" />
        </div>
        <div className="backgroundHome-mobile">
          <img
            style={{ height: 278, width: 230 }}
            src={Images.piggy}
            alt=""
            className="piggy"
          />
        </div>
      </div>
      <Discover></Discover>
      <OurGame></OurGame>
      <div className="Company block pd">
        <h2 className="title-softfun">2023 GAME EVENTS UPDATE</h2>
        <p className="subtitle-sortfun">
          Let's explore what's happening in our games right now
        </p>
        <div className="companyBG">
          <img src={Images.christmas} alt="" />
        </div>
      </div>
      <Clients></Clients>
    </div>
  );
}

export default Home;

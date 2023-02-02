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
          <h4 id="slogan" className="show-pc">
            Creative IDEA - CREATE VALUES - PLAY FOR FUN - HAPPY CLIENTS
          </h4>
          {/* <h4 id="slogan" className="show-mb">
            Creative IDEA, PLAY FOR FUN
          </h4> */}
          <h1 className="namecp-hp show-pc">
            WE ARE SOFTFUN <br></br>We bring Puzzle Joy
          </h1>
          {/* <h1 className="namecp-hp show-mb">SOFTFUN Games</h1> */}
          {/* <p id="slogan2" className="show-mb">
            Our games are vibrant worlds with charming characters
          </p> */}
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
      <Discover title="A NEW MILESTONE ACHIEVED" />
      <OurGame
        title="Welcome to Our Happy Puzzle World"
        subtitle="SOFTFUN MISSION - TO MAKE THE WORLD HAPPIER WITH OUR PUZZLE GAMES"
      />
      <div className="Company block pd">
        <h2 className="title-softfun">2023 GAME EVENTS UPDATE</h2>
        <p className="subtitle-sortfun">
          Let's explore what's happening in our games right now!
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

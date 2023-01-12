import Images from "../../config/Images";
import { React, useEffect } from "react";
import "./AboutPage.css";
import Clients from "../../components/Client/Clients";
import { Image } from "antd";

function AboutPage() {
  useEffect(() => {
    document.title = "About Us - Softfun";
  });

  return (
    <div className="AboutPage block">
      <div className="mobileDisplayBg">
        <h2>We are SOFTFUN</h2>
        <p style={{ padding: "0 20px" }}>
          An international digital games and entertainment company. A leader in
          multiplayer games, with a purpose to ‘unleash the gamer in everyone’
          with more than 4 billion downloads to date. Powered by amazing people.
        </p>
      </div>
      <div className="bgInfo block ">
        <img src={Images.bgAbout} alt="" />
        <div className="bgContent mobileHiddenContent">
          <h2>We are SOFTFUN</h2>
          <p>
            An international digital games and entertainment company. <br></br>A
            leader in multiplayer games, with a purpose to ‘unleash the gamer in
            everyone’ <br></br>with more than 4 billion downloads to date.
            <br></br>
            Powered by amazing people.
          </p>
        </div>
      </div>
      <div className="philosophy block">
        <h2>
          We aim to <span className="color-about">inspire</span> rather than
          manage our employees
        </h2>
      </div>
      <div className="work">
        <h3>
          Work from <span className="color-about">anywhere in the world</span>
        </h3>
        <p>
          Our employees choose whether to work from home, a coworking space, or
          one of our many offices.
        </p>
        <div className="imgWork">
          <img src={Images.work1} alt="" />
          <img src={Images.work2} alt="" />
          <img src={Images.work3} alt="" />
          <img src={Images.work4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

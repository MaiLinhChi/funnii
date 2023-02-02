import Images from "../../config/Images";
import { React, useEffect } from "react";
import "./AboutPage.css";
import Clients from "../../components/Client/Clients";
import { Image } from "antd";

function AboutPage() {
  useEffect(() => {
    document.title = "About Us - Softfun";
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <div className="AboutPage block">
      <div className="mobileDisplayBg">
        <h2>We are SOFTFUN</h2>
        <p className="des-about">
          Softfun is a group of people who are passionate about games and have
          the ambition to bring fun, entertaining, and valuable puzzle games to
          people of all ages around the world through the creation of puzzle
          games with high intelligence.
        </p>
        <br></br>
        <p className="des-about">
          Hyper Casual, Puzzle and Board games are the main game genres we focus
          on on IOS and Android platforms. We promise to bring the highest game
          quality to players through advanced game production models in the
          world such as data technology and 3D modeling and graphics.
        </p>
      </div>
      <div className="bgInfo block ">
        <img src={Images.bgAbout} alt="" />
        <div className="bgContent mobileHiddenContent">
          <h2>We are SOFTFUN</h2>
          <p className="des-about">
            Softfun is a group of people who are passionate about games and have
            the ambition to bring fun, entertaining, and valuable puzzle games
            to people of all ages around the world through the creation of
            puzzle games with high intelligence.
          </p>
          <br></br>
          <p className="des-about">
            Hyper Casual, Puzzle and Board games are the main game genres we
            focus on on IOS and Android platforms. We promise to bring the
            highest game quality to players through advanced game production
            models in the world such as data technology and 3D modeling and
            graphics.
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

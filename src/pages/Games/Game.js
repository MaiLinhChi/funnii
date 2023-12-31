import { React, useEffect } from "react";
import Images from "../../config/Images";
import Discover from "../../components/Discover/Discover";
import OurGame from "../../components/OurGame/OurGame";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GamesList } from "../../config/gamelist";

import "./Game.css";

export const TopGameItem = (props) => {
  return (
    <div className="cardGame">
      <img src={props.imgLarge} alt={props.title} />
      <div className="gameInfo">
        <h3>{props.titleH}</h3>
        <p>{props.detail}</p>
      </div>
    </div>
  );
};

export const SliderItemGame = (props) => {
  return (
    <div className="cardGame">
      <img src={props.imgLarge} alt={props.title} />
      <div className="gameInfo">
        <h3>{props.titleH}</h3>
        <p>{props.detail}</p>
      </div>
    </div>
  );
};

function GamePage() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    document.title = "Our Games - Softfun";
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <div className="GamePage">
      <div className="wrapper-discover">
        <Discover title="DISCOVER SOFTFUN NEW ACHIEVEMENTS" />
      </div>
      <div className="topGame">
        <h2 className="show-pc title-tg">The Top Puzzle game of SOFTFUN</h2>
        {/* <h2 className="show-mb">Top game</h2> */}
        <p className="subtitle-topgame show-mb">
          SOFTFUN is one of the top 3 mobile gaming companies in the SEA
        </p>
        <div className="listToGame">
          {GamesList.map((item) => {
            return (
              <TopGameItem
                key={item.id}
                imgLarge={item.imgLarge}
                titleH={item.titleH}
                detail={item.detail}
              ></TopGameItem>
            );
          })}
        </div>
        <Slider {...settings} className="sliderHidden">
          {GamesList.map((item) => {
            return (
              <SliderItemGame
                key={item.id}
                imgLarge={item.imgLarge}
                titleH={item.titleH}
                detail={item.detail}
              ></SliderItemGame>
            );
          })}
        </Slider>
      </div>

      <OurGame title="Over 1 million users play our games every month..." />
    </div>
  );
}

export default GamePage;

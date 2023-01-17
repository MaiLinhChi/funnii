import React from "react";
import "./Clients.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from "../../config/Images";
import Slider from "react-slick";
function Clients() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  const data = [
    {
      description:
        "Addicting! This is such a fun game & yes, I purchased coins as I’m all invested. As much as I really enjoy playing, & don’t want to stop, I will because of the glitches. Please keep updated, it’s a great game.",
      name: "MLORENA08",
      img: "images/game5.png",
      job: "Cooking Story player",
    },
    {
      description:
        "Coolest game ever played because of the way I feel their special effects once I pop them I love this version because once I pop the bubble I can feel the bubbles and hear them pop as well and it is great anyhow these are by far the most colorful balls I’ve ever seen in this kind of a game and I also love the extra thin round rims around each ball too.  I often am more relaxed because I don’t have to require to think ahead and especially when I am being timed on it🖖",
      name: "JANNYBOY",
      img: "images/game1.png",
      job: "Bubble Classic: Shooter Pop player",
    },
    {
      description:
        "A creative game. I'm not very good at playing games with high difficulty, but I think this one is quite creative. I really enjoy it! Thank Team and creator and developer so much!",
      name: "JOHNGU89",
      img: "images/game1.png",
      job: "Bubble Classic: Shooter pop China version",
    },
    {
      description:
        "YES! I GOT IT BACK!! 😄 Great game. Really enjoyable I have been looking for this Zuma Marble games for AGES (my old phone used to have it on when it was stolen. There are sooooo many Zuma marble games out there, but I persisted and I FINALLY came across it again! HAPPY DAYS!😚",
      name: "GARDEN_SCAPES",
      img: "images/game2.png",
      job: "Marble Deluxe: Revenge Blitz",
    },
  ];
  return (
    <div className="client block">
      {/* <span className="subtitle-client">Testimony</span> */}
      <h2 className="title-client">Voice of our game players</h2>
      <div className="cover">
        <img src={Images.testimony} alt="" className="testimony-pc" />
        <img src={Images.bgSlidermb} alt="" className="testimony-mb" />
        <Slider {...settings} className="slider">
          {data.map((item, index) => (
            <div className="contentCover">
              <div className="wrapper-img">
                <img src={item.img} alt="" className="person" />
              </div>
              <p className="desc-slider">{item.description}</p>
              <span className="name-slider">{item.name}</span>
              <span className="job-slider">{item.job}</span>
            </div>
          ))}
        </Slider>
      </div>
      <br />
    </div>
  );
}

export default Clients;

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
  return (
    <div className="client block">
      <span className="subtitle-client">Testimony</span>
      <h2 className="title-client">What Do Our Clients Says About Us</h2>
      <div className="cover">
        {/* <img src={Images.testimony} alt="" className="testimony" /> */}
        <Slider {...settings} className="slider">
          <div className="contentCover">
            <img src={Images.mintegrallogo} alt="" />
          </div>
          <div className="contentCover">
            <img src={Images.ironsource} alt="" />
          </div>
        </Slider>
      </div>
      <br />
    </div>
  );
}

export default Clients;

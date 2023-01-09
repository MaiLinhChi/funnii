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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.",
      name: "James Jokovic",
      job: "IT Consultant",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.",
      name: "James Jokovic",
      job: "IT Consultant",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.",
      name: "James Jokovic",
      job: "IT Consultant",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.",
      name: "James Jokovic",
      job: "IT Consultant",
    },
  ];
  return (
    <div className="client block">
      <span className="subtitle-client">Testimony</span>
      <h2 className="title-client">What Do Our Clients Says About Us</h2>
      <div className="cover">
        <img src={Images.testimony} alt="" className="testimony-pc" />
        <img src={Images.bgSlidermb} alt="" className="testimony-mb" />
        <Slider {...settings} className="slider">
          {data.map((item, index) => (
            <div className="contentCover">
              <div className="wrapper-img">
                <img src={Images.person} alt="" className="person" />
              </div>
              <p>{item.description}</p>
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

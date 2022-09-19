import React from 'react';
import './Clients.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from '../../config/Images';
import Slider from 'react-slick';
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
  }
  return (
    <div className="client block">
      <h2>Our Partners</h2>
      <div className="cover">
        <Slider {...settings} className='slider'>
          <div className="contentCover">
             <img src={Images.mintegrallogo} alt="" />
          </div>
          <div className="contentCover">
           <img src={Images.ironsource} alt="" />
          </div>  
        </Slider>
      </div>
      <br />
      <p className='PartnerText'>We look for the best partners and together we deliver their incredible games to players on all platforms and devices.</p>
    </div>
  );
}

export default Clients;
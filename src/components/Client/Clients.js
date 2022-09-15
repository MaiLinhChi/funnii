import React from 'react';
import './Clients.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from '../../config/Images';
import Slider from 'react-slick';
function Clients() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
  }
  return (
    <div className="client block">
      <p>Testimony</p>
      <h2>What Do Our Clients Says About Us</h2>
      <div className="cover">
        <img src={Images.clientBg} alt="" />
        <Slider {...settings} className='slider'>
          <div className="contentCover">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus doloribus quis a sunt blanditiis ex laborum iure atque, veniam delectus in ratione rem quidem incidunt suscipit eius laboriosam nisi nostrum.</p>
            <br />
            <p>JAMES JOKOVIC</p>
            <p>IT CONSULTANT</p>
          </div>
          <div className="contentCover">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus doloribus quis a sunt blanditiis ex laborum iure atque, veniam delectus in ratione rem quidem incidunt suscipit eius laboriosam nisi nostrum.</p>
            <br />
            <p>JAMES JOKOVIC</p>
            <p>IT CONSULTANT</p>
          </div>
          <div className="contentCover">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus doloribus quis a sunt blanditiis ex laborum iure atque, veniam delectus in ratione rem quidem incidunt suscipit eius laboriosam nisi nostrum.</p>
            <br />
            <p>JAMES JOKOVIC</p>
            <p>IT CONSULTANT</p>
          </div>
          <div className="contentCover">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus doloribus quis a sunt blanditiis ex laborum iure atque, veniam delectus in ratione rem quidem incidunt suscipit eius laboriosam nisi nostrum.</p>
            <br />
            <p>JAMES JOKOVIC</p>
            <p>IT CONSULTANT</p>
          </div>
          
        </Slider>
      </div>
    </div>
  );
}

export default Clients;
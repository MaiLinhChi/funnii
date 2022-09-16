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
      <p>Testimony</p>
      <h2>Funnii Partners</h2>
      <div className="cover">
        <Slider {...settings} className='slider'>
          <div className="contentCover">
             <img src={Images.mintegrallogo} alt="" />
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ullam dolor nisi quia, itaque labore, totam voluptas iste quos accusantium, officia est exercitationem quam aspernatur animi sapiente reiciendis ut sequi.</p>
          </div>
          <div className="contentCover">
           <img src={Images.ironsource} alt="" />
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, id, delectus nam magnam unde ea aut iste repudiandae officia odit dolorem fuga provident harum minima tenetur, sapiente exercitationem cumque vitae?</p>
          </div>
          
        </Slider>
      </div>
    </div>
  );
}

export default Clients;
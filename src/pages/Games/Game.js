import { React, useEffect } from "react";
import Images from "../../config/Images";
import Discover from "../../components/Discover/Discover";
import OurGame from "../../components/OurGame/OurGame";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GamesList } from "../../config/gamelist";

import './Game.css'


export const TopGameItem = (props) => {
    return (
        <div className="cardGame">
            <img src={props.imgLarge} alt={props.title} />
            <div className="gameInfo">
                <h3>{props.title}</h3>
                <p>{props.detail}</p>
            </div>
        </div>
    )
}

export const SliderItemGame = (props) => {
    return (
        <div className="cardGame">
        <img src={props.imgLarge} alt={props.title} />
        <div className="gameInfo">
            <h3>{props.title}</h3>
            <p>{props.detail}</p>
        </div>
    </div>
    )
}

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
                    slidesToScroll: 1
                }
            }
        ]
    }

    useEffect(() => {
        document.title = 'Our Games - Funnii';
    });

    return (
        <div className="GamePage">
            <Discover></Discover>
            <br />
            <img src={Images.bgGame} alt="" className="backgroundGamePage" />

            <div className="topGame">
                <h2>Top game</h2>
                <p>Funnii is one of the top 3 mobile gaming companies in the SEA</p>
                <div className="listToGame">
                    {GamesList.map((item, index) => {
                        return(
                            <TopGameItem key={item.id}
                                imgLarge = {item.imgLarge}
                                title = {item.title}
                                detail = {item.detail}>
                            </TopGameItem>
                            
                        );
                    })}
                </div>
                <Slider {...settings} className='sliderHidden'>
                    {GamesList.map((item, index) => {
                            return(
                                <SliderItemGame key={item.id}
                                    imgLarge = {item.imgLarge}
                                    title = {item.title}
                                    detail = {item.detail}>
                                </SliderItemGame>
                                
                            );
                        })}
                </Slider>
            </div>

            <OurGame></OurGame>
        </div>

    );
}

export default GamePage;
import { React, useEffect } from "react";
import Images from "../../config/Images";
import Discover from "../../components/Discover/Discover";
import OurGame from "../../components/OurGame/OurGame";
import Games from "../../config/games";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Game.css'
function GamePage() {

    const settings = {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
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
                    <div className="cardGame">
                        <img src={Games.Comic.url} alt="" />
                        <div className="gameInfo">
                            <h3>{Games.Comic.title}</h3>
                            <p>{Games.Comic.detail}</p>
                        </div>
                    </div>
                    <div className="cardGame">
                        <img src={Games.MergeSuperhero.url} alt="" />
                        <div className="gameInfo">
                            <h3>{Games.MergeSuperhero.title}</h3>
                            <p>{Games.MergeSuperhero.detail}</p>
                        </div>
                    </div>
                    <div className="cardGame">
                        <img src={Games.BubbleClassic.url} alt="" />
                        <div className="gameInfo">
                            <h3>{Games.BubbleClassic.title}</h3>
                            <p>{Games.BubbleClassic.detail}</p>
                        </div>
                    </div>
                    <div className="cardGame">
                        <img src={Games.StickShadow.url} alt="" />
                        <div className="gameInfo">
                            <h3>{Games.StickShadow.title}</h3>
                            <p>{Games.StickShadow.detail}</p>
                        </div>
                    </div>
                    <div className="cardGame">
                        <img src={Games.EraseGames.url} alt="" />
                        <div className="gameInfo">
                            <h3>{Games.EraseGames.title}</h3>
                            <p>{Games.EraseGames.detail}</p>
                        </div>
                    </div>
                    <div className="cardGame">
                        <img src={Games.PinkGame.url} alt="" />
                        <div className="gameInfo">
                            <h3>{Games.PinkGame.title}</h3>
                            <p>{Games.PinkGame.detail}</p>
                        </div>
                    </div>

                </div>
                <Slider {...settings} className='sliderHidden'>
                    <div className="cardGame">
                        <img src={Games.Comic.url} alt="" />
                        <div className="gameInfo">
                            <h3>{Games.Comic.title}</h3>
                            <p>{Games.Comic.detail}</p> 
                        </div>
                    </div>
                    <div className="cardGame">
                        <img src={Games.MergeSuperhero.url} alt="" />
                        <div className="gameInfo">
                            <h3>{Games.MergeSuperhero.title}</h3>
                            <p>{Games.MergeSuperhero.detail}</p>
                        </div>
                    </div>
                    <div className="cardGame">
                        <img src={Games.BubbleClassic.url} alt="" />
                        <div className="gameInfo">
                            <h3>{Games.BubbleClassic.title}</h3>
                            <p>{Games.BubbleClassic.detail}</p>
                        </div>
                    </div>
                    <div className="cardGame">
                        <img src={Games.StickShadow.url} alt="" />
                        <div className="gameInfo">
                            <h3>{Games.StickShadow.title}</h3>
                            <p>{Games.StickShadow.detail}</p>
                        </div>
                    </div>
                    <div className="cardGame">
                        <img src={Games.EraseGames.url} alt="" />
                        <div className="gameInfo">
                            <h3>{Games.EraseGames.title}</h3>
                            <p>{Games.EraseGames.detail}</p>
                        </div>
                    </div>
                    <div className="cardGame">
                        <img src={Games.PinkGame.url} alt="" />
                        <div className="gameInfo">
                            <h3>{Games.PinkGame.title}</h3>
                            <p>{Games.PinkGame.detail}</p>
                        </div>
                    </div>

                </Slider>
            </div>

            <OurGame></OurGame>
        </div>

    );
}

export default GamePage;
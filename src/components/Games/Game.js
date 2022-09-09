import React from "react";
import Images from "../../config/Images";
import Discover from "../Discover/Discover";
import OurGame from "../OurGame/OurGame";
import './Game.css'
function GamePage() {
    return (
        <div className="GamePage">
            <Discover></Discover>
            <br />
            <img src={Images.bgGame} alt="" className="backgroundGamePage"/>

            <div className="topGame">
                <h2>Top game</h2>
                <p>Funnii is one of the top 3 mobile gaming companies in the SEA</p>
                <div className="listToGame">
                    <div class="cardGame">
                        <img src={Images.gameTop1} alt="" />
                        <p>Game 1</p>
                    </div>
                    <div className="cardGame">
                        <img src={Images.gameTop2} alt="" />
                        <p>Game 2</p>
                    </div>
                    <div className="cardGame">
                        <img src={Images.gameTop3} alt="" />
                        <p>Game 3</p>
                    </div>
                    <div className="cardGame">
                        <img src={Images.gameTop4} alt="" />
                        <p>Game 4</p>
                    </div>
                    <div className="cardGame">
                        <img src={Images.gameTop5} alt="" />
                        <p>Game 5</p>
                    </div>
                    <div className="cardGame">
                        <img src={Images.gameTop6} alt="" />
                        <p>Game 6</p>
                    </div>
                    
                </div>
            </div>

            <OurGame></OurGame>
        </div>
        
      );
}

export default GamePage;
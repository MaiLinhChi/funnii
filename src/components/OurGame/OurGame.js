import React from "react";
import './OurGame.css';
import Images from "../../config/Images";

function OurGame() {
    return (
        <div className="ourGame">
            <h2>Our games</h2>
            <p>Over 100 million people play our games every month</p>
            <div className="listGame">
                <div class="card">
                    <img src={Images.game1} alt="" />
                    <p className="nameGame">Game Name</p>
                </div>
                <div class="card">
                    <img src={Images.game2} alt="" />
                    <p className="nameGame">Game Name</p>
                </div>
                <div class="card">
                    <img src={Images.game3} alt="" />
                    <p className="nameGame">Game Name</p>
                </div>
                <div class="card">
                    <img src={Images.game4} alt="" />
                    <p className="nameGame">Game Name</p>
                </div>
                <div class="card">
                    <img src={Images.game5} alt="" />
                    <p className="nameGame">Game Name</p>
                </div>
            </div>
            <button>See more</button>
        </div>
    );
}

export default OurGame;
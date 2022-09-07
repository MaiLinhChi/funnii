import React from "react";
import Images from "../../config/Images";
import Discover from "../Discover/Discover";
import OurGame from "../OurGame/OurGame";
import './Home.css'
function Home() {
    return ( 
        <div className="homePage">
            <div className="intro">
                <div className="content">
                    <p id="slogan">Creative IDEA, PLAY FOR FUN</p>
                    <h1><span style={{color:'#EA0000'}}>Funnii</span> Games</h1>
                    <p id="slogan2">Our games are vibrant worlds with charming characters</p>
                    <button>See more</button>
                </div>
                <img src={Images.solider} alt=""  />
                <img src={Images.king} alt=""  className="king"/>
            </div>
            <Discover></Discover>
            {/* <OurGame></OurGame> */}
        </div>    
    );
}

export default Home;
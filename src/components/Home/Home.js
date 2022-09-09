import React from "react";
import Images from "../../config/Images";
import Clients from "../Client/Clients";
import Discover from "../Discover/Discover";
import OurGame from "../OurGame/OurGame";
import './Home.css'
function Home() {

    const redText = {
        color:'#EA0000'
    };
    
    return ( 
        <div className="homePage">
            <div className="intro">
                <div className="content">
                    <p id="slogan">Creative IDEA, PLAY FOR FUN</p>
                    <h1><span style={redText}>Funnii</span> Games</h1>
                    <p id="slogan2">Our games are vibrant worlds with charming characters</p>
                    <button>See more</button>
                </div>
                <div class="backgroundHome">
                    <img src={Images.solider} alt=""  />
                    <img src={Images.king} alt=""  className="king"/>
                </div>
            </div>
            <Discover></Discover>
            <OurGame></OurGame>
             <div className="Company">
                <h2>Life at <span style={redText}>Funnii</span></h2>
                <p>Our employees can work from anywhere in the world</p>
                <div class="companyBG">
                    <img src={Images.company} alt="" />
                <button>See more</button>
                </div> 
            </div>
            <Clients></Clients>
        </div>    
    );
}

export default Home;
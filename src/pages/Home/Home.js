import {React, useEffect} from "react";
import Images from "../../config/Images";
import Clients from "../../components/Client/Clients";
import Discover from "../../components/Discover/Discover";
import OurGame from "../../components/OurGame/OurGame";
import './Home.css'
function Home() {
    useEffect(() => {
        document.title = 'Home - Funnii';
      });

    const redText = {
        color:'#EA0000'
    };
    
    return ( 
        <div className="homePage">
            <div className="intro block">
                <div className="content">
                    <p id="slogan">Creative IDEA, PLAY FOR FUN</p>
                    <h1><span style={redText}>Funnii</span> Games</h1>
                    <p id="slogan2"> Funnii are hyper-casual game with trending characters</p>
                    
                </div>

                <div className="backgroundHome">
                    <img src={Images.bg1} alt=""/>
                    <img src={Images.bg2} alt=""/>
                </div>
            </div>
            <Discover></Discover>
            <OurGame></OurGame>
             <div className="Company block">
                <h2>Life at <span style={redText}>Funnii</span></h2>
                <p>Our employees can work in a scrum organization, active and professional working environment with a highly experienced.</p>
                <div className="companyBG">
                    <img src={Images.company} alt="" />               
                </div> 
            </div>
            <Clients></Clients>
        </div>    
    );
}

export default Home;
import Images from "../../config/Images";
import React from "react";
import './AboutPage.css'
import Clients from "../Client/Clients";
import { Image } from 'antd';


function AboutPage() {
    return (
        <div className="AboutPage">
            <div className="mobileHiddenBg"> 
                    <h2>We are <span style={{ color: 'red' }}> Funnii</span></h2>
                    <p>An international digital games and entertainment company.
                        A leader in multiplayer games, with a purpose to ‘unleash the gamer in everyone’ with more than 4 billion downloads to date.
                        Powered by amazing people.</p>
            </div>
            <div className="bgInfo">
                <img src={Images.bgAbout} alt="" className="bgAbout" />
                {/* <div className="bgContent"> 
                    <h2>We are Funnii</h2>
                    <p>An international digital games and entertainment company.
                        A leader in multiplayer games, with a purpose to ‘unleash the gamer in everyone’ with more than 4 billion downloads to date.
                        Powered by amazing people.</p>
                </div> */}

            </div>
            <div class="philosophy">
                <h2 >We aim to <span style={{ color: 'red' }}>inspire</span> rather than manage our employees</h2>
            </div>
            <div className="work">
                <h2>Work from <span style={{ color: 'red' }}>anywhere in the world</span></h2>
                <p>Our employees choose whether to work from home, a coworking space, or one of our many offices.</p>
                <div class="imgWork">
                    <Image.PreviewGroup >
                        <Image src={Images.work1} alt="" />
                        <Image src={Images.work2} alt="" />
                        <Image src={Images.work3} alt="" />
                        <Image src={Images.work4} alt="" />
                    
                    </Image.PreviewGroup>
                </div>
            </div>
            <Clients></Clients>
        </div>
    );
}

export default AboutPage;
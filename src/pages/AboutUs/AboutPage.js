import Images from "../../config/Images";
import {React, useEffect} from "react";
import './AboutPage.css'
import Clients from "../../components/Client/Clients";
import { Image } from 'antd';


function AboutPage() {
    useEffect(() => {
        document.title = 'About Us - Funnii';
    });

    return (
        <div className="AboutPage block">
            <div className="mobileDisplayBg"> 
                    <h2>We are <span style={{ color: 'red' }}> Funnii</span></h2>
                    <p>An international digital games and entertainment company.
                        A leader in multiplayer games, with a purpose to ‘unleash the gamer in everyone’ with more than 4 billion downloads to date.
                        Powered by amazing people.</p>
            </div>
            <div className="bgInfo block">
                <img src={Images.bgAbout} alt="" className="bgAbout" />
                <div className="bgContent mobileHiddenContent"> 
                    <h2>We are Funnii</h2>
                    <p>An international digital games and entertainment company.
                        A leader in multiplayer games, with a purpose to ‘unleash the gamer in everyone’ with more than 4 billion downloads to date.
                        Powered by amazing people.</p>
                </div>
            </div>
            <div className="philosophy">
                <h2><span style={{color:'red'}}>Funnii</span> - a place where everyone can thrive and do their best work</h2>
            </div>
            <div className="work">
                <h2>Work from <span style={{ color: 'red' }}>anywhere in the world</span></h2>
                <p>Our employees choose whether to work from home, a coworking space, or one of our many offices.</p>
                <div className="imgWork">
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
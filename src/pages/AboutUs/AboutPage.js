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
                    <p>We are committed to providing high-quality products to the global market and hope to become one of the top studios</p>
            </div>
            <div className="bgInfo block">
                <img src={Images.bgAbout} alt="" />
                <div className="bgContent mobileHiddenContent"> 
                    <h2>We are Funnii</h2>
                    <p>We are committed to providing high-quality products to the global market and hope to become one of the top studios</p>
                </div>
            </div>
            <div className="philosophy">
                <h2><span style={{color:'red'}}>Funnii</span> - a place where everyone can thrive and do their best work</h2>
            </div>
            <div className="work">
                <h2>Makes a Great Quality Team</h2>
                <p>Listening, having humility, being open to new ways of thinking, and looking with a lens of inclusion. Challenging ourselves to grow and change as a company.</p>
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
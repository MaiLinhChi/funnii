import { Row, Col } from 'antd';
import Images from '../../config/Images';
import './Footer.css'
function Footer() {
    return (
        <div className="Footer">
            <Row>
                <Col  lg={6} md={24} >
                    <img src={Images.logoBottom} alt="logo" className='logoBottom' />
                </Col>
                <Col  lg={6} md={24}>
                    <h5>Contact Us</h5>
                    <p><b>Email</b>: hr@funnii.net</p>
                    <p><b>Office</b>: 20 COLLYER QUAY, #23-01, 20 COLLYER QUAY, Singapore 049319</p>
                    
                </Col>
                <Col  lg={6} md={24} className="hidden">
                    <h5>About Us</h5>
                    <p>Funnii Studio develops and delivers games online for mobile devices. Create Idea & Play For Fun </p>
                </Col>
                <Col  lg={6} md={24}>
                    <h5>Subcribe</h5>
                    <div className='inputWithButton'>
                        <input type="email" placeholder='Your Email' />
                        <button type='submit'><img src={Images.submit} alt="" /></button>
                    </div>
                 
                    <br />
                    <h5>Follow Us</h5>
                    <a href=" https://www.facebook.com/profile.php?id=100064234053555" target="_blank"><img className='Icon' src={Images.fbIcon} alt="fbIcon" /></a>
                </Col>
            </Row>
        </div>
    );
}

export default Footer;
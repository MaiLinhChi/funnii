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
                    <h5>Our Contact</h5>
                    <p>Office: 4042 Imperial Road, UK</p>
                    <p>Help: (0411) 425 277 / 425</p>
                    <p>Email: inbox@finance.com</p>
                </Col>
                <Col  lg={6} md={24} className="hidden">
                    <h5>About Us</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. </p>
                </Col>
                <Col  lg={6} md={24}>
                    <h5>Subcribe</h5>
                    <div className='inputWithButton'>
                        <input type="email" placeholder='Your Email' />
                        <button><img src={Images.submit} alt="" /></button>
                    </div>
                 
                    <br />
                    <h5>Follow Us</h5>
                    <a href=""><img className='Icon' src={Images.fbIcon} alt="fbIcon" /></a>
                    <a href=""><img className='Icon' src={Images.twIcon} alt="twIcon" /></a>
                    <a href=""><img className='Icon' src={Images.insIcon} alt="insIcon" /></a>
                </Col>
            </Row>
        </div>
    );
}

export default Footer;
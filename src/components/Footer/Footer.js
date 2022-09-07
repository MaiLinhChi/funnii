
import { Row, Col } from 'antd';
import Images from '../../config/Images';
import './Footer.css'
function Footer() {
    return (
        <div className="Footer">
            <Row>
                <Col span={6} xs={24} xl={6} >
                    <img src={Images.logoBottom} alt="logo" className='logoBottom'/> 
                </Col>
                <Col span={6} xs={24} xl={6}>
                    <h5>Our Contact</h5>
                    <p>Office: 4042 Imperial Road, UK</p>
                    <p>Help: (0411) 425 277 / 425</p>
                    <p>Email: inbox@finance.com</p>
                </Col>
                <Col span={6} xs={24} xl={6}>
                    <h5>About Us</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. </p>
                </Col>
                <Col span={6} xs={24} xl={6}>
                    <h5>Subcribe</h5>
                    <input type="email" name="email" id="input_email" placeholder='Your Email' />
                    <br />
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
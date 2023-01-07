import { Row, Col } from "antd";
import Images from "../../config/Images";
import "./Footer.css";
function Footer() {
  return (
    <div className="Footer">
      <Row gutter={40}>
        <Col lg={3} md={24}>
          <img src={Images.logo} alt="logo" className="logoBottom" />
        </Col>
        <Col lg={7} md={24}>
          <h5>Contact Us</h5>
          <p>
            Office: 289 Truong Chinh, P. Tan Thoi Nhat, Q.12, TP.Ho Chi Minh
          </p>
          <p>Phone : +842838530531</p>
          <p>Email: softfun.net</p>
        </Col>
        <Col lg={7} md={24} className="hidden">
          <h5>About Us</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
            amet posuere porta vitae mi accumsan. Ultricies
          </p>
        </Col>
        <Col lg={7} md={24}>
          <h5 className="hidden">Subcribe</h5>
          <div className="inputWithButton hidden">
            <input type="email" placeholder="Your Email" />
            <button type="submit">
              <img src={Images.submit} alt="" />
            </button>
          </div>
          <h5 className="follow-footer">Follow Us</h5>
          <a
            href=" https://www.facebook.com/profile.php?id=100064234053555"
            target="_blank"
          >
            <img className="Icon" src={Images.fbIcon} alt="fbIcon" />
          </a>
        </Col>
      </Row>
      <br></br>
    </div>
  );
}

export default Footer;

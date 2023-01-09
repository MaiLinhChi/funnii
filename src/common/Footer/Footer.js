import { useState } from "react";
import { Row, Col } from "antd";
import Images from "../../config/Images";
import "./Footer.css";
import { Drawer } from "antd";
import { NavLink } from "react-router-dom";

function Footer() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const activeStyle = {
    color: "#FFFFFF",
  };

  return (
    <div className="Footer">
      <Row gutter={90}>
        <Col lg={4} md={24} className="menu-bottom">
          <img src={Images.logo} alt="logo" className="logoBottom" />
          <img
            src={Images.menuRepo}
            className="hidden-pc"
            alt=""
            onClick={showDrawer}
          />
          <Drawer
            placement="right"
            closable={true}
            onClose={onClose}
            open={open}
          >
            <ul>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/home"
                  className="no-bg"
                >
                  <img src={Images.logoBottom} alt="" />
                </NavLink>
              </li>
              <br />
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/home"
                  onClick={onClose}
                >
                  HOME{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/games"
                  onClick={onClose}
                >
                  GAMES
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/company"
                  onClick={onClose}
                >
                  COMPANY
                </NavLink>
              </li>
              {/*<li><NavLink style={({ isActive }) =>isActive ? activeStyle : undefined } to="/policy" onClick={onClose}>POLICY</NavLink></li>*/}
              {/*<li><NavLink style={({ isActive }) =>isActive ? activeStyle : undefined } to="/terms" onClick={onClose}>TERMS</NavLink></li>*/}
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/about"
                  onClick={onClose}
                >
                  ABOUT US
                </NavLink>
              </li>
            </ul>
          </Drawer>
        </Col>
        <Col lg={6} md={24} className="out-contract">
          <h5>Our Contact</h5>
          <p>
            Office: 289 Truong Chinh, P. Tan Thoi Nhat, Q.12, TP.Ho Chi Minh
          </p>
          <p>Phone : +842838530531</p>
          <p>Email: softfun.net</p>
        </Col>
        <Col lg={6} md={24} className="hidden">
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

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
      <Row gutter={60}>
        <Col lg={4} md={24} className="menu-bottom mb">
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
        <Col lg={6} md={24} className="out-contract mb">
          <h5>Our Contact</h5>
          <p>Office: No. 289 Truong Chinh address, Tan Thoi Nhat Ward, HCMC</p>
          <p>Phone : +842 838 530 531</p>
          <p>Email: contact@softfun.net</p>
        </Col>
        <Col lg={6} md={24} className="hidden mb">
          <h5>About Us</h5>
          <p>
            SOFTFUN - An international digital games and entertainment company
            powered by amazing people, with more than 4 billion downloads to
            date.
          </p>
        </Col>
        <Col lg={7} md={24} className="mb">
          <h5 className="hidden">Subcribe</h5>
          <div className="inputWithButton hidden">
            <input type="email" placeholder="Your Email" />
            <button type="submit">
              <img src={Images.submit} alt="" />
            </button>
          </div>
          <p className="item-footer">
            <NavLink to="/terms-of-use">Term of Services</NavLink>
          </p>
          <p className="item-footer">
            <NavLink to="/privacy-policy">Privacy Policy</NavLink>
          </p>
          <h5 className="follow-footer">Follow Us</h5>
          <a
            href="https://www.facebook.com/people/Softfun-JSC/100066876312809/?mibextid=LQQJ4d"
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

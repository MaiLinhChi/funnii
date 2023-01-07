import Images from "../../config/Images";
import "./Header.css";
import React, { useState } from "react";
import { Drawer } from "antd";
import { NavLink } from "react-router-dom";

function Header() {
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
    <nav className="container-fluid pd">
      <div className="header">
        <div className="logo">
          <NavLink to="/home">
            <img src={Images.logo} alt="" className="logo-mobile" />
          </NavLink>
        </div>
        <div className="mobileVisible">
          <img
            src={Images.menuRepo}
            className="menu-icon"
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
        </div>
        <div className="mobileHidden">
          <ul>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/home"
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/games"
              >
                GAMES
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/company"
              >
                COMPANY
              </NavLink>
            </li>
            {/*<li><NavLink style={({ isActive }) =>isActive ? activeStyle : undefined } to="/policy">POLICY</NavLink></li>*/}
            {/*<li><NavLink style={({ isActive }) =>isActive ? activeStyle : undefined } to="/terms">TERMS</NavLink></li>*/}
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/about"
              >
                ABOUT US
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

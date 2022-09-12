import Images from '../../config/Images';
import './Header.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Drawer } from 'antd';
import { NavLink } from 'react-router-dom';

function Header() {

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <nav className="container-fluid">
            <div className="header">
                <div className="logo">
                    <NavLink to="/home"><img src={Images.logo} alt="" /></NavLink>
                </div>
                <div className="mobileVisible">

                    <img src={Images.menu} alt="" onClick={showDrawer} />
                    <Drawer
                        placement="right"
                        closable={true}
                        onClose={onClose}
                        open={open}
                    >
                        <ul targetOffset="65">
                            <li><NavLink to="/home"><img src={Images.logoBottom} alt="" /></NavLink></li>
                            <br />
                            <li><NavLink to="/home" style={({isActive}) => {return {color: isActive ? 'red' : 'grey'}}} onClick={onClose}>HOME </NavLink></li>
                            <li><NavLink to="/games" style={({isActive}) => {return {color: isActive ? 'red' : 'grey'}}} onClick={onClose}>GAMES</NavLink></li>
                            <li><NavLink to="..." onClick={onClose} style={({isActive}) => {return {color: isActive ? 'red' : 'grey'}}} >CAREERS</NavLink></li>
                            <li><NavLink to="/about" style={({isActive}) => {return {color: isActive ? 'red' : 'grey'}}} onClick={onClose}>ABOUT US</NavLink></li>
                        </ul>
                    </Drawer>
                </div>
                <div className="mobileHidden">
                    <ul targetOffset="65" >
                        <li><NavLink isActive to='/home' style={({isActive}) => {return {color: isActive ? 'red' : 'grey'}}} >HOME</NavLink></li>
                        <li><NavLink to="/games" style={({isActive}) => {return {color: isActive ? 'red' : 'grey'}}}>GAMES</NavLink></li>
                        <li><NavLink to="...">CAREERS</NavLink></li>
                        <li><NavLink to="/about" style={({isActive}) => {return {color: isActive ? 'red' : 'grey'}}}>ABOUT US</NavLink></li>
                    </ul>
                </div>

            </div>
        </nav>

    );
}

export default Header;

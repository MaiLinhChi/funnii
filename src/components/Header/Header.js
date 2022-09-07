import Images from '../../config/Images';
import './Header.css'
import React, { useState } from 'react';

import { Anchor, Drawer, Button } from 'antd';

const { Link } = Anchor;

function Header() {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <a href=""><img src={Images.logo} alt="" /></a>
                </div>
                <div className="mobileVisible">
                    <img src={Images.menu} alt="" onClick={showDrawer} />
                    <Drawer
                        placement="right"
                        closable={false}
                        onClose={onClose}
                        visible={visible}
                    >
                        <ul targetOffset="65">
                            <li><a href=""><img src={Images.logoBottom} alt="" /></a></li>
                            <br />
                            <li href="#" title="HOME"><a href="">HOME</a></li>
                            <li href="#" title="GAMES"><a href="">GAMES</a></li>
                            <li href="#" title="CAREERS"><a href="">CAREERS</a></li>
                            <li href="#" title="ABOUT US"><a href="">ABOUT US</a></li>
                        </ul>
                    </Drawer>
                </div>
                <div className="mobileHidden">
                    <ul targetOffset="65" >
                        <li href="#" title="HOME"><a href="">HOME</a></li>
                        <li href="#" title="GAMES"><a href="">GAMES</a></li>
                        <li href="#" title="CAREERS"><a href="">CAREERS</a></li>
                        <li href="#" title="ABOUT US"><a href="">ABOUT US</a></li>
                    </ul>
                </div>

            </div>
        </div>

    );
}

export default Header;

import { Divider, Row, Col } from 'antd';
import React from 'react';
import './Discover.css'
function Discover() {
    return (
        <div className="discover">
            <h2>Discover our games</h2>
            <div className="discover_info">
                <div className="info_detail">
                    <div className='detail_numbers'>200 million</div>
                    <div className='detail_words'>downloads</div>
                </div>
                <div className="info_detail hidden">
                    <Divider type="vertical"  />
                </div>
                <div className="info_detail">
                    <div className='detail_numbers'>80+</div>
                    <div className='detail_words'>games launched</div>
                </div>
                <div className="info_detail hidden">
                    <Divider type="vertical" />
                </div>
                <div className="info_detail">
                    <div className='detail_numbers'>20 million</div>
                    <div className='detail_words'>monthly active users</div>
                </div>
            </div>
        </div>


    );
}

export default Discover;
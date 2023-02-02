import { Divider } from "antd";
import React from "react";
import "./Discover.css";
function Discover({ title }) {
  return (
    <div className="discover">
      <h2 className="title-discover pc show-pc">{title}</h2>
      {/* <h2 className="title-discover show-mb">Discover our games</h2> */}
      <div className="discover_info">
        <div className="info_detail">
          <div className="detail_numbers">5M+</div>
          <div className="detail_words">downloads</div>
        </div>
        <div className="info_detail hidden">
          <Divider type="vertical" />
        </div>
        <div className="info_detail">
          <div className="detail_numbers">10+</div>
          <div className="detail_words">games launched</div>
        </div>
        <div className="info_detail hidden">
          <Divider type="vertical" />
        </div>
        <div className="info_detail">
          <div className="detail_numbers">1+ million</div>
          <div className="detail_words">monthly active users</div>
        </div>
      </div>
    </div>
  );
}

export default Discover;

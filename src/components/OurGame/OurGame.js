import React from "react";
import "./OurGame.css";
import { GamesList } from "../../config/gamelist";

export const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imageSmall} alt={props.title} />
      <p className="nameGame">{props.title}</p>
    </div>
  );
};

function OurGame({ title, subtitle }) {
  return (
    <div className="ourGame block">
      <h2 className="title-ourgame show-pc">{title}</h2>
      {/* <h2 className="title-ourgame show-mb">Our games</h2> */}
      <p style={{ padding: "0 44px" }} className="show-pc">
        {subtitle}
      </p>
      {/* <p style={{ padding: "0 44px", marginBottom: 0 }} className="show-mb">
        Over 10 million people play our games every month
      </p> */}
      <div className="listGame">
        {GamesList.map((item) => {
          if (item.notop === 0) {
            return (
              <Card
                key={item.id}
                imageSmall={item.imgSmall}
                title={item.title}
              ></Card>
            );
          }
        })}
      </div>
    </div>
  );
}

export default OurGame;

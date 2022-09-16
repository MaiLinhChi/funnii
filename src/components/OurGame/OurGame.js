import React from "react";
import './OurGame.css';
import { GamesList } from "../../config/gamelist";


export const Card = (props) => {
    return (
        <div className="card">
            <img src={props.imageSmall} alt={props.title} />
            <p className="nameGame">{props.title}</p>
        </div>
    )
}

function OurGame(props) {
    return (
        <div className="ourGame block">
            <h2>Our games</h2>
            <p>Over 10 million people play our games every month</p>
            <div className="listGame">
                {GamesList.map((item, index) => {
                    return(
                        <Card key={item.id}
                            imageSmall = {item.imgSmall}
                            title = {item.title}>
                        </Card>
                    );
                })}
            </div>
            
        </div>
    );
}

export default OurGame;
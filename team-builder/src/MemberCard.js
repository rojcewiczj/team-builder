import React from "react";

const Cards = props => {
    console.log(props);
    return (
        <div className="member-card">
            {props.memberCard.map ()}

        </div>
    )
}

export default Cards;
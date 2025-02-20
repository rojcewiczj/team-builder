import React, {useState} from "react";

const Cards = props => {

    console.log(props);
    return (
        <div className="member-card">
            {props.memberCard.map(member => {
                return(
                    <div className="card" key={member.id}>
                        <h1>{member.name}</h1>
                        <h3>{member.role}</h3>
                        <h5>{member.email}</h5>
                        <form onSubmit={props.memberToEdit}>
                        <button type ="submit">{`Edit ${member.name}`}</button>
                        </form>
                        </div>
                );
            })}

        </div>
    )
}

export default Cards;
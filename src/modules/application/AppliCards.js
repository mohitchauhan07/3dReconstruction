import React from "react";
const AppliCards = (props) => {
  return (
    <div class="cardsContainer">
      <div class="card applicationCard">
        <figure>
          <img
            src={props.src}
            height="100%"
            width="100%"
            alt="autonomousVehicle"
          />
        </figure>
        <div class="applicationContent">
          <h2 class="titleColor">{props.heading}</h2>
          <p>{props.para}</p>
        </div>
      </div>
    </div>
  );
};

export default AppliCards;

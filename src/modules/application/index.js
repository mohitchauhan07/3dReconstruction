import React from "react";
import "./index.css";
import Card from "./AppliCards";

const Application = () => {
  return (
    <>
    <div className={'navHelper'} id = "ApplicationSection">

    </div>
    <div className="applicationSection">
      <h1 className="applicationHeading titleColor">{"Applications"}</h1>
      <div
        className="applicationContainer"
        para={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit ligula, rutrum hendrerit arcu vitae, fermentum placerat sapien. Phasellus dignissim leo eu tellus varius, et egestas diam faucibus. Nulla volutpat, odio sit amet faucibus varius, metus nunc aliquam mauris, non dictum ante diam rhoncus lectus. Ut tempor varius elit consequat scelerisque. Aenean congue mi nec lacus lacinia sodales. Curabitur at libero risus."
        }
      >
        <Card
          src={"images/RedSea.jpg"}
          heading={"3D RECONSTRUCTION OF A CANYON IN RED SEA"}
          para={
            "A new canyon -MOD 45155030 was discovered by the Royal Navy in the Red Sea using 3D construction and echo sounding technology ."
          }
        />
        <Card
          src={"images/Robot.jpeg"}
          heading={"Autonomus Robots"}
          para={
            "Images are taken from the robot as input and are processed on 3D model to predict the position and the path of the robot"
          }
        />
        <Card
          src={"images/Self-driving-Car.jpg"}
          heading={"Self-Driving Car"}
          para={
            "3D construction is used in self-driving cars like Tesla to predict the motion and drivable space of the vehicle."
          }
        />
      </div>
    </div>
    </>
  );
};

export default Application;

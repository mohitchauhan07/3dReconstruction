import React from "react";
import "./index.css";

const FutureScope = () => {
  return (
    <section className={"futureScope"}>
       <div className={'navHelper'} id = "FutureSection">

    </div>
      <div className={"container futureScopeContainer"}>
        <h1 className={"heading futureScopeHeading"}>Future Scope</h1>
        <div className={"displayRow futureScopeCardsContainer"}>
          <figure className={"card graphicsPart"}>
            <img
              className={"scopeImg"}
              src={"images/lidarAlternate.jpeg"}
              alt={"lidar alternate"}
            />
          </figure>
          <div className={"card contentPart"}>
            <h2 className={"title scopeHeading"}>{"Lidar Alternate"}</h2>
            <p className={"para scopeContent"}>
              {
                "Lidar, which stands for Light Detection and Ranging, is a remote sensing method that uses light in the form of a pulsed laser to measure ranges (variable distances) to the Earth.These light pulses—combined with other data recorded by the airborne system — generate precise, three-dimensional information about the shape of the Earth and its surface characteristics.Lidar systems are expensive.Our model uses in-expensive method that serves as an alternate Lidar system, that could be used in Autonomous Vehicles"
              }
            </p>
          </div>
          <div className={"card contentPart"}>
            <h2 className={"title scopeHeading"}>{"GPS Alternate"}</h2>
            <p className={"para scopeContent"}>
              {
                "The Global Positioning System (GPS) is a navigation system using satellites, a receiver and algorithms to synchronize location, velocity and time data for air, sea and land travel. The Global Positioning System (GPS) has been developed in order to allow accurate determination of geographical locations by military and civil users but in a closed environment, inaccurate results are common.So,using a MI-lock we can predict accurate position of the desired object using image."
              }
            </p>
          </div>
          <figure className={"card graphicsPart"}>
            <img
              className={"scopeImg"}
              src={"images/gpsAlternate.jpeg"}
              alt={"GPS Alternate"}
            />
          </figure>
          <figure className={"card graphicsPart"}>
            <img
              className={"scopeImg"}
              src={"images/futureMarket.jpg"}
              alt={"future market"}
            />
          </figure>
          <div className={"card contentPart"}>
            <h2 className={"title scopeHeading"}>{"Future Market"}</h2>
            <p className={"para scopeContent"}>
              {
                "The global 3D Reconstruction Technology market is valued at 210 million USD in 2018 and is expected to reach 530 million USD by the end of 2024, growing at a CAGR of 16.9% between 2019 and 2024.The 3D Reconstruction Technology market is in the promotion and innovation stage, and it is widely believed that 3D Reconstruction Technology will be a useful technique and will change the world. Europe plays an important role in the global market, with a market size of million USD in 2019 and will be million USD in 2024, with a CAGR."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureScope;

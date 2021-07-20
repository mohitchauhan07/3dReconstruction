import React from "react";
import "./index.css";
const Approach = () => {
  return (
    <section>
          <div className={'navHelper'} id = "ApproachSection">

          </div>
      <div className={"container"}>
        <div className={"approachCard displayColumn card"}>
          <h1 className={"heading approachHeading"}>{"Technical Approach"}</h1>
          <p className={"para approachPara"}>
            {
              `We trained a supervised Deep Learning model with more than 18000 images.
              The models takes 6 images from two consecutive timestamp and predicts the Global 6-DoF camera pose and difference in the poses.
              For training, the images captured from 3 different cameras and extract corresponding pose from Lego-LOAM.
              Further the model exported into TensorRT.
              Indoor Food Court data is collected from OttonomyIO bot.
              The data is collected from 3 cameras at 10 Hz. 
              The data is collected from 3 cameras at 10 Hz. The camera is setup in such a way that they cover 360°.
              Lidar point cloud captured for calculating the poses.
              To extract the pose for training from Lidar point cloud we used Lego-LOAM.
              Captured more than 5000 images.`
            }
          </p>
          <figure className={"approachImg1"}>
            <img
              src={"./images/objectDetection.jpg"}
              alt={"Object Detection"}
            />
          </figure>
          <figure className={"approachImg2"}>
            <img
              src={"./images/3DReconstruct.jpg"}
              alt={"3-D Reconstruction"}
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Approach;

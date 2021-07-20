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
              "Previously we had developed a live segmentation with object detection in our minor project. Now we are extending that to apply one of its applications that is  3D Reconstruction.Our aim is to design and develop a neural architecture which will generate an environment that  maps  3D positions.So it will parse the image or video pixel by pixel to predict and generate its corresponding 3D point in a 3D environment.That will be used to construct the environment.We have also engineered a website which contains our research work,approach,outcomes and future scope of our project.The code was developed in Python.The dataset contains more than 5000 images occupying upto 20 GB.The model was trained on NVIDIA 3060 to train our deep learning model."
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

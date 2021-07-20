import React from 'react';
import "./index.css";
// import VideoPlay from "./video"


const Banner = (props) => {
  
    return (
        <div id="banner-section-1">
            <div class="banner container">
                <div class="content">
                    {/* <h2> MILOC</h2> */}
                    <h1> MiLoc </h1>
                    <p>MiLoc is Multi-Input image based Global Localization which predicts global pose and difference of poses from two consecutive images
End-to-end Deep Learning model predicts each 6-DoF camera pose or coordinate 
MiLoc is very cost ineffective and dramatically reduces cost that we could incur other from a LIDAR setup.In addition, it solves the problem  of inaccurate GPS positioning obtained in an indoor environment . 
                    </p>
                    <div class="say_hello">
                        <button class="hello-btn">Read More *</button>
                    </div>
                </div>
                <div class="image">
                <video autoPlay muted={true} loop>
                <source src="images/view_3.mp4" type="video/mp4"/>
                </video>
                </div>
            </div>
        </div>      
    )
}

export default Banner;

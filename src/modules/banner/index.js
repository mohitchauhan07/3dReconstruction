import React from 'react';
import "./index.css";
// import VideoPlay from "./video"


const Banner = (props) => {
  
    return (
        <div id="banner-section-1">
            <div class="banner container">
                <div class="content">
                    <h2>3D Positioning System</h2>
                    <h1>Real Time 3-D Positioning Based On Neural Network </h1>
                    <p>A novel framework for real-time 3D scene reconstruction 
                        from a video. Using some neural methods that estimate 
                        single-view depth maps separately on each key-frame and
                         fuse them later,
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

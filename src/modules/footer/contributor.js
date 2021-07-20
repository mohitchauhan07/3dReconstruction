import React from "react";
import "./index.css";

function Contributor(props) {
  return (
    <div className={"contributor"}>
      <figure className={"contributorFrame"}>
        <img src={props.src} alt={"contributor-img"} />
      </figure>
      <div className={"contributorDetails"}>
        <div style={{textTransform:'uppercase'}}>{props.name}</div>
        <a className={'connect'} target={'_blank'} href={props.connectLink}>{'LinkedIn Profile'}</a>
      </div>
    </div>
  );
}

export default Contributor;

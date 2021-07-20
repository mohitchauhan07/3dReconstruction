import React from 'react'
import './index.css'

const output = () => {
    return (
        <>
        <div className={'navHelper'} id='output'>

        </div>
         <div className={"container"}>
            <div className={'archiCard card'}>
            <h1 className={"heading"}>{"Output"}</h1>
            <video className={'outputVideo'} autoPlay muted={true} loop>
                <source src="images/output.mp4" type="video/mp4"/>
                </video>
            </div>
        </div>
        </>
    )
}

export default output;

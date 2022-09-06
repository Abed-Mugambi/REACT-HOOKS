import React from "react";

import myImage from "../Images/max.png"

export function About(){

    return(
        <div>
            <img src={myImage} className="myimage" height="140px" alt="" />
            <h1>this is a custom about export</h1>
        </div>
    )
}
import React from "react";
import HikingCard from "./HikingCard";

function HikingList({hikes, handleClick, setProject}){
   const hikingElement = hikes.map((data)=> (
        <HikingCard setProject = {setProject} key = {data.id} handleClick={handleClick} hike= {data} />
    ))

    return(

        <div className="wrapper">
            {hikingElement}
        </div>
    )
}

export default HikingList
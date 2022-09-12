import { useState, useEffect } from "react";
import HikingCard from "./HikingCard";

function HikingList({hikes, handleClick})
{
   const hikingElement =  hikes.map((data)=> <HikingCard handleClick={handleClick} hike= {data}/>)

    return(

        <div>{hikingElement}</div>
    )
}

export default HikingList
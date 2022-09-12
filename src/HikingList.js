import { useState, useEffect } from "react";
import HikingCard from "./HikingCard";

function HikingList({hikes})
{
   const hikingElement =  hikes.map((data)=> <HikingCard hike= {data}/>)

    return(

        <div>{hikingElement}</div>
    )
}

export default HikingList
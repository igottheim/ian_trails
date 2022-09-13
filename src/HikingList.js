import { useState, useEffect } from "react";
import HikingCard from "./HikingCard";
import { Link } from "react-router-dom";

function HikingList({hikes, handleClick})
{
   const hikingElement =  hikes.map((data)=> (<HikingCard key = {data.id} handleClick={handleClick} hike= {data}> 
    
   </HikingCard> ))

    return(

        <div >{hikingElement}</div>
    )
}

export default HikingList
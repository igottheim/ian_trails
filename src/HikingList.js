import { useState, useEffect } from "react";
import HikingCard from "./HikingCard";
import { Link } from "react-router-dom";

function HikingList({hikes, handleClick, setProject})
{
   const hikingElement =  hikes.map((data)=> (<HikingCard setProject = {setProject} key = {data.id} handleClick={handleClick} hike= {data}> 
    
   </HikingCard> ))

    return(

        <div  className="wrapper">{hikingElement}</div>
    )
}

export default HikingList
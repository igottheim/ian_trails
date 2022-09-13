

import HikingList from "./HikingList";
import { useRouteMatch, Route } from "react-router-dom";



function HikingPage({hikes, handleClick})
{   
    const match = useRouteMatch();
    console.log(match);
    return (
        <> 
    <HikingList hikes = {hikes} handleClick = {handleClick} />
    </>

    )

}

export default HikingPage
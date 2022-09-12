

import HikingList from "./HikingList";

function HikingPage({hikes, handleClick})
{   
    return (
    <HikingList hikes = {hikes} handleClick = {handleClick} />
    )

}

export default HikingPage
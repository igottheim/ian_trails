

import HikingList from "./HikingList";

function HikingPage({hikes, handleClick, setProject})
{   
   
  
    return (
        <> 
    <HikingList hikes = {hikes} handleClick = {handleClick} setProject= {setProject} />
    </>

    )
}

export default HikingPage
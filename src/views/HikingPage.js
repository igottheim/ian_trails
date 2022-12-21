import React from 'react';
import HikingList from '../components/HikingList';
function HikingPage({hikes, handleClick, setProject})
{ 
    return (
        <> 
            <HikingList hikes={hikes} handleClick={handleClick} setProject={setProject} />
        </>
    );
}

export default HikingPage;
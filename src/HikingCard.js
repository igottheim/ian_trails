
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded'



 function HikingCard({hike, handleClick, setProject}) {
  
 
 
  const params = useParams()
  console.log(params)

    useEffect(() => {
        fetch(`http://localhost:4000/hiking/${params.id}`)
            .then(r => r.json())
            .then(data => setProject(data))
    }, [params.id])
    
    

    

  //Switches the card face from the image of the hike to the description
  const [imageOn, setImageOn]= useState(true)
  function manageImage()
  {
    setImageOn(!imageOn)

  }

  return (
    <Card className = "card">
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography level="h2" fontSize="md" textAlign={"center"}>
         {hike.name}
        </Typography>
        <Typography level="body2" textAlign={"center"}> <LocationOnRoundedIcon/>{hike.Location}</Typography>
      </Box>
      
      <AspectRatio objectFit='contain' minHeight="250px" maxHeight="200px" sx={{ my: 1 }}>
       {imageOn? <img
          onClick = {manageImage}
          src={hike.image}
          alt="Image Did not Load"
          
        />: <div onClick={manageImage}>{hike.description}</div>}
      
      </AspectRatio>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
      <span >
        Distance: {hike.dogFriendly===false? `${hike.distance} miles ⛔🐕 `:  `${hike.distance} miles 🐕`} 
        <Button className = "likeButton" onClick ={()=>handleClick(hike)} 
          sx={{ fontWeight: 600, border: '2px solid black', marginLeft: "85%"}}
        >
          {hike.likes} ⛰️ 
        </Button>
       
        </span>
      </Box>
      <span>
      <Link className = "link" to={`/HikingPage/${hike.id}`}>Zoom In</Link>
      <span className= "span"> </span>
      <Link className = "link2" to={`/HikingPage/`}>See All Cards</Link>
      </span>
    </Card>
  );
}
export default HikingCard
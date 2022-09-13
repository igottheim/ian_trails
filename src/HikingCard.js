
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';

import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded'



 function HikingCard({hike, handleClick}) {


  return (
    <Card onClick ={()=>handleClick(hike)} variant="outlined" sx={{ "--Card-radius": "25px", maxWidth: '400px', marginLeft: "450px", color: "black", background: "linear-gradient(white,  green 30%)" }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography level="h2" fontSize="md" textAlign={"center"}>
         {hike.name}
        </Typography>
        <Typography level="body2" textAlign={"center"}> <LocationOnRoundedIcon/>{hike.Location}</Typography>
      </Box>
      
      <AspectRatio objectFit='contain' minHeight="250px" maxHeight="300px" sx={{ my: 2 }}>
        <img
          src={hike.image}
          alt=""
          
        />
      </AspectRatio>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
      <span >
        Distance: {hike.distance} miles <span > </span>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          textAlign={"center"}
          sx={{ fontWeight: 600, border: '2px solid black'}}
        >
          {hike.likes} ⛰️ 
        </Button>
        </span>
      </Box>
    </Card>
  );
}
export default HikingCard
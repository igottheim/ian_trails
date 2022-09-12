
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';


 function HikingCard({hike, handleClick}) {


  return (
    <Card onClick ={()=>handleClick(hike)} variant="outlined" sx={{ "--Card-radius": "25px", minWidth: '100px' , maxWidth: '400px', marginLeft: "450px", color: "black", background: "linear-gradient(white,  green 30%)" }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography level="h2" fontSize="md" sx={{ alignSelf: 'flex-start' }}>
         {hike.name}
        </Typography>
        <Typography level="body2">Location: {hike.Location}</Typography>
      </Box>
      <AspectRatio objectFit='contain' minHeight="250px" maxHeight="300px" sx={{ my: 2 }}>
        <img
          src={hike.image}
          alt=""
        />
      </AspectRatio>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
      <span >
        Distance: {hike.distance} miles <span ></span>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600, border: '2px solid black' , marginRight:"auto"}}
        >
          {hike.likes} ⛰️ 
        </Button>
        </span>
      </Box>
    </Card>
  );
}
export default HikingCard
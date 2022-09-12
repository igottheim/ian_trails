
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import HikingPage from './HikingPage';
import HikingForm from './HikingForm';
import NavBar from './NavBar';
import {Route, Switch } from 'react-router-dom';

import { useState , useEffect } from 'react';

function App() {

  const [hikes, setHikes] = useState([])
  // const [newHike, setNewHike]= useState({
  //     "name": "",
  //     "Location": "",
  //     "image": "",
  //     "likes": 1,
  //     "distance": "",
  //     "id": ""
  // })


console.log(hikes)
  useEffect(()=>{
  fetch('http://localhost:3021/hiking')
  .then(r=> r.json())
  .then(data => setHikes(data))
  }
  ,[])
 

  function manageClick(hike)
  {
       const updateLike =  hikes.filter((item)=> item.id === hike.id)

       updateLike[0].likes+=1
      
       const newHikeArray = hikes.map((item)=>
       {
        if (item.id === updateLike.id)
        {
          return updateLike
        }
        else {

          return item
        }})
        
        fetch(`http://localhost:3021/hiking/${hike.id}`,
        {
          method: "PATCH",
          headers:{"Content-Type":"application/json",
        },    
        body:JSON.stringify(hike),
      })
      .then(r => r.json())
      .then ( setHikes(newHikeArray))
    }
    
    function manageSubmit(e)
    {
      e.preventDefault()
        const obj = {
          "name": e.target[0].value,
          "Location":  e.target[1].value,
          "image": e.target[3].value,
          "distance": e.target[2].value,
          "likes": 1,
          "id": hikes.length+1
        }
       
       
        fetch('http://localhost:3021/hiking',
      {
        method:"POST",
        headers:{"Content-Type":"application/json",
        },
      body:JSON.stringify(obj)
      })
      
        setHikes([...hikes, obj])
    }
   

  return (
    <div className = "grad" >
    <NavBar className = "center"/>
    <Switch>
      <Route path = "/HikingForm">
    <HikingForm handleSubmit={manageSubmit}/>
    </Route>
    <Route path = "/HikingPage">
    <HikingPage hikes = {hikes} handleClick = {manageClick}/>
    </Route>
    <Route path = "*">
    <button className='center'/>
    </Route>
   
    </Switch>
  
    </div>
  );
}

export default App;

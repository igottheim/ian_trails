
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Switch } from 'react-router-dom';
import React, { useState , useEffect } from 'react';

import HikingPage from './HikingPage';
import HikingForm from './HikingForm';
import About from './About';
import NavBar from '../components/NavBar';
import HikingCard from '../components/HikingCard';

function App() {

  //Set state for the db.json hikes file
  const [hikes, setHikes] = useState([])
  const [project, setProject] = useState([]);


  //useEffect to pull information from db.json() file
  // useEffect(()=>{
  // fetch('https://edge-config.vercel.com/ecfg_hps9g4funsize4p4cjx2o5w8zame?token=bedf7cb0-1ae3-44f4-960d-bb33c670d72b')
  // .then(r=> r.json())
  // .then(data => setHikes(data))
  // }
  // ,[])

  useEffect(()=>{
    fetch('https://edge-config.vercel.com/'+process.env.REACT_APP_EDGE_CONFIG_ID+'/items',{
      method:"GET",
      headers:{
        "Content-Type": "application/json",
        "Authorization": "Bearer "+process.env.REACT_APP_EDGE_CONFIG_TOKEN,
      },
    })
    .then(r=> r.json())
    .then(data => setHikes(data.hiking))
  },[])

 

  //Manages and persists the amount of likes for a hike with a patch request
  function manageClick(hike)
  {
    const updateLike =  hikes.filter((item)=> item.id === hike.id)
    updateLike[0].likes+=1
    //creates a new array with the object modified based on the uplike
    const newHikeArray = hikes.map((item)=>{
      if (item.id === updateLike.id){
        return updateLike
      }
      else {
        return item
      }
    })
        
    fetch(`http://localhost:4000/hiking/${hike.id}`,
      {
        method: "PATCH",
        headers:{"Content-Type":"application/json",
      },    
      body:JSON.stringify(hike),
    })
    .then(r => r.json())
    .then (setHikes(newHikeArray))
  }
    
  //Adding a new hike and persisting with a post request
  function manageSubmit(e)
  {
    let obj;
    e.preventDefault()
    
    if (e.target[0].value !=="" && e.target[1].value !=="" && e.target[2].value !=="" && e.target[3].value!== "" && e.target[4].value!== ""){
      obj = {
        "name": e.target[0].value,
        "Location":  e.target[1].value,
        "image": e.target[3].value,
        "distance": e.target[2].value,
        "likes": 1,
        "id": hikes.length+1,
        "dogFriendly": e.target[5].checked,
        "description": e.target[4].value
      }

      fetch('http://localhost:4000/hiking/hiking',{
        method:"POST",
        headers:{"Content-Type":"application/json",
        },
      body:JSON.stringify(obj)
      })
      setHikes([...hikes, obj])
        // history.push(`/HikingPage/${obj.id}`)
        alert("SUBMITTED!")
      }
      else{
        alert("Please Fill In All Information. Please Make Sure URL is accurate!")
      } 
  }
  
    function manageProject(e){
      setProject(e)
    }
  
    function manageTheClick(hike){
      const updateLike =  hikes.filter((item)=> item.id === hike.id)
      updateLike[0].likes+=1
      
      const newHikeArray = hikes.map((item)=>{
        if (item.id === updateLike.id){
          return updateLike
        }
        else {
          return item
        }
      })
      fetch(`http://localhost:4000/hiking/${hike.id}`,
      {
        method: "PATCH",
        headers:{
          "Content-Type":"application/json",
        },    
        body:JSON.stringify(hike),
      })
      .then(r => r.json())
      .then ( setHikes(newHikeArray))
    }
  return (
    <div className="grad">
      <NavBar className="center"/>
      <Switch>
        <Route path="/HikingForm">
          <HikingForm handleSubmit={manageSubmit} />
        </Route>
        <Route exact path="/HikingPage">
          <HikingPage className="wrapper" hikes={hikes} handleClick={manageClick} />
        </Route>
        <Route path="/HikingPage/:id">
          <HikingCard setProject={manageProject} hike={project} handleClick={manageTheClick} />
        </Route>
        <Route exact path="/About">
          <About/>
        </Route>
        <Route path="*">
          <About/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import HikingPage from './HikingPage';
import HikingForm from './HikingForm';
import NavBar from './NavBar';
import {Route, Switch } from 'react-router-dom';

import { useState , useEffect } from 'react';

function App() {

  const [hikes, setHikes] = useState([])


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
    

  return (
    <div className="App">
    <NavBar/>
    <Switch>
      <Route path = "/HikingForm">
    <HikingForm/>
    </Route>
    <Route path = "/HikingPage">
    <HikingPage hikes = {hikes} handleClick = {manageClick}/>
    </Route>
   
    </Switch>
  
    </div>
  );
}

export default App;

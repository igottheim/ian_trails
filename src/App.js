
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import HikingPage from './HikingPage';
import HikingForm from './HikingForm';
import About from './About';
import NavBar from './NavBar';
import {Route, Switch, useHistory} from 'react-router-dom';
import HikingCard from './HikingCard';


import { useState , useEffect } from 'react';

function App() {

  //Set state for the db.json hikes file
  const [hikes, setHikes] = useState([])
  const [project, setProject] = useState([]);


  //useEffect to pull information from db.json() file
  useEffect(()=>{
  fetch('https://project-json.herokuapp.com/hiking')
  .then(r=> r.json())
  .then(data => setHikes(data))
  }
  ,[])
 

  //Manages and persists the amount of likes for a hike with a patch request
  function manageClick(hike)
  {
       const updateLike =  hikes.filter((item)=> item.id === hike.id)
       updateLike[0].likes+=1
       //creates a new array with the object modified based on the uplike
       const newHikeArray = hikes.map((item)=>
       {
        if (item.id === updateLike.id)
        {
          return updateLike
        }
        else {

          return item
        }})
        
        fetch(`https://project-json.herokuapp.com/hiking/${hike.id}`,
        {
          method: "PATCH",
          headers:{"Content-Type":"application/json",
        },    
        body:JSON.stringify(hike),
      })
      .then(r => r.json())
      .then (setHikes(newHikeArray))
    }
    
    const history = useHistory();
    //Adding a new hike and persisting with a post request
    function manageSubmit(e)
    {
      let obj
      let response
      e.preventDefault()
      console.log(e.target[5].checked)
      if (e.target[0].value !==""&&e.target[1].value !==""&& e.target[2].value !==""&&e.target[3].value!== ""&&e.target[4].value!== "")
      {
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


        fetch('http://localhost:4000/hiking',
        {
          method:"POST",
          headers:{"Content-Type":"application/json",
          },
        body:JSON.stringify(obj)
        })
        
          setHikes([...hikes, obj])
          history.push(`/HikingPage/${obj.id}`)
      }
      else{
        
        alert("Please Fill In All Information. Please Make Sure URL is accurate!")
      } 
    }
  
    function manageProject(e)
    {
      setProject(e)
      console.log(e)
    }
  
    function manageTheClick(hike)
    {
     
    console.log(hike.likes++)
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
        fetch(`https://project-json.herokuapp.com/hiking${hike.id}`,
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
    <div className = "grad" >
    <NavBar className = "center"/>
    <Switch>
      <Route path = "/HikingForm">
    <HikingForm handleSubmit={manageSubmit}/>
    </Route>
    <Route exact path = "/HikingPage">
    <HikingPage className = "wrapper"  hikes = {hikes} handleClick = {manageClick}/>
    </Route>
    <Route path="/HikingPage/:id">
   <HikingCard setProject = {manageProject} hike= {project} handleClick = {manageTheClick} />
    </Route>
    <Route exact path = "/About">
    <About/>
    </Route>
    <Route  path = "*">
    <About/>
    </Route>
    </Switch>
  
    </div>
  );
}

export default App;

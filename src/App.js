
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
 
  console.log(hikes)
 
  return (
    <div className="App">
    <NavBar/>
    <Switch>
      <Route path = "/HikingForm">
    <HikingForm/>
    </Route>
    <Route path = "/HikingPage">
    <HikingPage hikes = {hikes}/>
    </Route>
   
    </Switch>
  
    </div>
  );
}

export default App;

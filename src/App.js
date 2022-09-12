import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Alert from 'react-bootstrap/Alert'
import HikingPage from './HikingPage';
import HikingForm from './HikingForm';
import NavBar from './NavBar';
import { Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Switch>
      <Route path = "/HikingForm">
    <HikingForm/>
    </Route>
    <Route path = "/HikingPage">
    <HikingPage/>
    </Route>
    </Switch>
  
    </div>
  );
}

export default App;

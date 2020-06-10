import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
import SignupNew from './Components/Auth/SignupNew';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}  />
          <Route  path="/user/dashboard" component={Dashboard}  />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/signupnew" component={SignupNew} />
          <Route component={Error} />
        </Switch>
      </Router>
        
    </>
  );
}

export default App;

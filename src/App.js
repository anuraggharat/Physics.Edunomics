import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import Footer from './Components/Reusable/Footer'
import Navbar from './Components/Reusable/Navbar'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}  />
          <Route  path="/user/dashboard" component={Dashboard}  />
          <Route component={Error} />
        </Switch>
        <Footer />
      </Router>
        
    </>
  );
}

export default App;

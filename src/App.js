import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Components/Home/Home'
import Dashboard from './Components/Dashboard'
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
import SignupNew from './Components/Auth/SignupNew';
//import {Provider} from 'react-redux'
//import store from './store';
import Error from './Components/Reusable/Error';
import NavbarMain from './Components/Reusable/Navbar';


function App() {
  return (
    <>
    {/* <Provider store={store}> */}
      <Router>
        <NavbarMain />
        <Switch>
          <Route exact path="/" component={Home}  />
          <Route  path="/user/dashboard" component={Dashboard}  />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/signupnew" component={SignupNew} />
          <Route component={Error} />
        </Switch>
      </Router>
      {/* </Provider>  */}
    </>
  );
}

export default App;

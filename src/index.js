import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Dashboard from './components/Dashboard/Dashboard';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chatroom from './components/Chatroom/Chatroom';
import reportWebVitals from "./reportWebVitals";
import Changepassword from './components/ChangePassword/changepassword';
import ForgetPassword from "./components/ForgetPassword/forgetPassword"; 
import NewPassword from './components/ForgetPassword/newpassword';

const token = localStorage.getItem('token');
ReactDOM.render(
  <React.StrictMode>
   <App />
    <Router>
     <Switch> 
     {!token ? 
     <>   
    <Route exact path="/home" component={Home}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/resetpassword/:userid/:token" component={NewPassword}/>
    <Route exact path="/forgetpassword" component={ForgetPassword}  />
    <Route exact path="/register" component={Register}/>
    </>
     : 
     <>
     <Route exact path="/changepassword" component={Changepassword}/>
     <Route exact path="/profile" component={Profile}  />
     <Route exact path="/dashboard" component={Dashboard} />
     <Route exact path="/chatroom/:roomname/:id" component={Chatroom} />
     </>
     }
    </Switch>
  </Router>
  
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

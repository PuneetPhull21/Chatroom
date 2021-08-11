import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chatroom from './components/Chatroom/Chatroom';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Header/>
     <Router>
     <Switch>
     <Route exact path="/login" component={Login}/>
     <Route exact path="/dashboard" component={Dashboard}/>
     <Route exact path="/chatroom/:roomname/:id" component={Chatroom}/>
     </Switch>
  </Router>
    </div>
  );
}

export default App;

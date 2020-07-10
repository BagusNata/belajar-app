import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./App-Component/About";
import Login from "./Login-Component/Login"
import Signup from "./Login-Component/Signup"
import MainContent from './Market-Component/MainContent';
import DarkMode from './DarkMode/MainContentDM';


function App() {
  return (
    <Router>
      <div>
        <div style={{ marginTop: "2rem" }}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Home" component={MainContent} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Dark_Mode" component={DarkMode} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

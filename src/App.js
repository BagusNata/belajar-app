import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./App-Component/Navbar";
import About from "./App-Component/About";
import MainContent from './Market-Component/MainContent';
import DarkMode from './DarkMode/MainContentDM';


function App() {
  return (
    <Router>
      <div>
        <div className="row">
          <Navbar />
        </div>
        <div style={{ marginTop: "3rem" }}>
          <Switch>
            <Route exact path="/" component={MainContent} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Dark_Mode" component={DarkMode} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <MainContent/>
//     </div>
//   );
// }

export default App;

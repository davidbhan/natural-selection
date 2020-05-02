import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Introduction from "./pages/Introduction";
import Hawkdove from "./pages/Hawkdove";
import HawkdoveSim from "./pages/HawkdoveSim";
import HawkdoveSandbox from "./pages/HawkdoveSandbox";
import Ess from "./pages/Ess";
import EssSim from "./pages/EssSim";
import EssSandbox from "./pages/EssSandbox";
import Fakefighting from "./pages/Fakefighting";
import FakefightingSim from "./pages/FakefightingSim";
import FakefightingSandbox from "./pages/FakefightingSandbox";
import Conclusion from "./pages/Conclusion";

import "./css/balloon.css";
import "./css/App.css";


class App extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <div className="content">
              <Route exact path="/" component={Introduction}/> 
              <Route path="/hawkdove" component={Hawkdove}/>
              <Route path="/hawkdovesimulation" component = {HawkdoveSim}/>
              <Route path="/hawkdovesandbox" component = {HawkdoveSandbox}/>
              <Route path="/ess" component = {Ess}/>
              <Route path="/esssimulation" component = {EssSim}/>
              <Route path="/esssandbox" component = {EssSandbox}/>
              <Route path="/fakefighting" component = {Fakefighting}/>
              <Route path="/fakefightingsimulation" component = {FakefightingSim}/>
              <Route path="/fakefightingsandbox" component = {FakefightingSandbox}/>
              <Route path="/conclusion" component = {Conclusion}/>
            </div>
            <ul className="header">
              <li><NavLink exact to="/"><button aria-label="Introduction" class="button-header tooltip-big-text" data-balloon-pos="up"></button></NavLink></li>
              <li><NavLink to="/hawkdove"><button aria-label="The Hawk Dove Game" class="button-header tooltip-big-text" data-balloon-pos="up"></button></NavLink></li>
              <li><NavLink to="/hawkdovesimulation"><button aria-label="Hawk Dove Simulation" class="button-header tooltip-big-text" data-balloon-pos="up"></button></NavLink></li>
              <li><NavLink to="/hawkdovesandbox"><button aria-label="Hawk Dove Sandbox" class="button-header tooltip-big-text" data-balloon-pos="up"></button></NavLink></li>
              <li><NavLink to="/ess"><button aria-label="Evolutionary Stable Strategy" class="button-header tooltip-big-text" data-balloon-pos="up"></button></NavLink></li>
              <li><NavLink to="/esssimulation"><button aria-label="Evolutionary Stable Strategy Simulation" class="button-header tooltip-big-text" data-balloon-pos="up"></button></NavLink></li>
              <li><NavLink to="/esssandbox"><button aria-label="Evolutionary Stable Strategy Sandbox" class="button-header tooltip-big-text" data-balloon-pos="up"></button></NavLink></li>
              <li><NavLink to="/fakefighting"><button aria-label="Fake Fighting?" class="button-header tooltip-big-text" data-balloon-pos="up"></button></NavLink></li>
              <li><NavLink to="/fakefightingsimulation"><button aria-label="Fake Fighting Simulation" class="button-header tooltip-big-text" data-balloon-pos="up"></button></NavLink></li>
              <li><NavLink to="/fakefightingsandbox"><button aria-label="Fake Fighting Sandbox" class="button-header tooltip-big-text" data-balloon-pos="up"></button></NavLink></li>
              <li><NavLink to="/conclusion"><button aria-label="Conclusion" class="button-header tooltip-big-text" data-balloon-pos="up"></button></NavLink></li>
            </ul>
          </div>
          
        </HashRouter>
      );
    }
  }
 
export default App;
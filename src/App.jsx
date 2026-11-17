import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import Introduction from "./pages/Introduction";
import Hawkdove from "./pages/Hawkdove";
import HawkdoveSim from "./pages/HawkdoveSim";
import HawkdoveSandbox from "./pages/HawkdoveSandbox";
import Ess from "./pages/Ess";
import EssSandbox from "./pages/EssSandbox";
import Fakefighting from "./pages/Fakefighting";
import FakefightingSim from "./pages/FakefightingSim";
import FakefightingSandbox from "./pages/FakefightingSandbox";
import Conclusion from "./pages/Conclusion";
import CssBaseline from '@material-ui/core/CssBaseline';

import "./css/App.css";


class App extends Component {
    render() {
      return (
        <HashRouter>
          <CssBaseline />
          <div>
            <div className="content">
              <Route exact path={["/home", "/"]} component={Introduction}/> 
              <Route path="/hawkdove" component={Hawkdove}/>
              <Route path="/hawkdovesimulation" component = {HawkdoveSim}/>
              <Route path="/hawkdovesandbox" component = {HawkdoveSandbox}/>
              <Route path="/ess" component = {Ess}/>
              <Route path="/esssandbox" component = {EssSandbox}/>
              <Route path="/fakefighting" component = {Fakefighting}/>
              <Route path="/fakefightingsimulation" component = {FakefightingSim}/>
              <Route path="/fakefightingsandbox" component = {FakefightingSandbox}/>
              <Route path="/conclusion" component = {Conclusion}/>
            </div>
          </div>
          
        </HashRouter>
      );
    }
  }
 
export default App;
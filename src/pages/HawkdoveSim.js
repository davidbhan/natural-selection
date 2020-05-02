import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";

class HawkdoveSim extends Component {
  render() {
    return (
      <div>
        <h2>Hawk Dove Simulation</h2>
        <button><NavLink to="/hawkdovesandbox">Start</NavLink></button>
      </div>
    );
  }
}
 
export default HawkdoveSim;
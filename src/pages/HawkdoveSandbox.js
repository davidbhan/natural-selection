import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";

class HawkdoveSandbox extends Component {
  render() {
    return (
      <div>
        <h2>Hawk Dove Sandbox</h2>

        <button><NavLink to="/ess">Next</NavLink></button>
      </div>
    );
  }
}
 
export default HawkdoveSandbox;
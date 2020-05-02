import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
import "../css/pages.css";

class Hawkdove extends Component {
  render() {
    return (
      <div>
        <h2>The Hawk Dove Game</h2>
        <p>Imagine you are a bird searching for food and you find a fruit on the ground.</p>
        <p>However, another bird reaches the food at the same time as you. </p>
        <p>Should you fight with the other bird for the food or try peaceful negotiations?</p>
        <p>The answer to this question is unclear, but let us add some context...</p>

        <p>
        Now Suppose you were hungry, but you may starve if you don’t eat. 
        Give a simple example with quantified units. Would you contest for food? 
        Of course! Clearly the situation depends on context. (Maybe explains why 
        kids fight more since they have less at stake, but shortsightedness makes
        them think the issue at hand is important.)

        </p>
        
        <button><NavLink to="/hawkdovesimulation">Next</NavLink></button>
      </div>
    );
  }
}
 
export default Hawkdove;
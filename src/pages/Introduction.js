import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
import "../css/pages.css";


class Introduction extends Component {
  render() {
    return (
      <div>
        <h2>Animal Displays</h2>
        <p>
          Why do animals tussle and stage fights instead of 
        </p>
        <p>Have you ever watched a nature documentary and thought to yourself that it's amazing how 
            the world has arrived at such an impressive array of species that all coexist in a delicate
            balance across ecosystems?</p>
 
        <p>We know that nature is resilient and that if it is left out of the hand of human meddling,
            it can recover to its former state over time. How is this possible? How much human
            impact does it take for a system to be unrecoverable? Also, how can we quantify this? </p>

        <p>Part of the answer lies in something called <b>Evolutionary Stable Strategies</b></p>

        <button><NavLink to="/hawkdove">Start</NavLink></button>
      </div>
    );
  }
}
 
export default Introduction;
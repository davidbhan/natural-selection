import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import Table from '@material-ui/core/Table';


class Bird {
  constructor(strategy, payoff) {
    this.strategy = strategy; // 0 is hawk, 1 is crow, 2 is dove
    this.payoff = payoff;
  }
}


class PopulationStatistics {
  constructor(round, hawk, crow, dove, hawkRatio, crowRatio, doveRatio) {
    this.round = round; 
    this.hawk = hawk;
    this.crow = crow; 
    this.dove = dove; 
    this.hawkRatio = hawkRatio;
    this.crowRatio = crowRatio;
    this.doveRatio = doveRatio;
  }
}


var initializePopulation = (p, q, r) => {
  let out = [];
  var i;
  for (i = 0; i < Math.floor(p*q); i++) {
    out[i] = new Bird(0, 0);
  }
  for (i = Math.floor(p*q); i < Math.floor(p*q) + Math.floor(p*r); i++) {
    out[i] = new Bird(1, 0);
  }
  for (i = Math.floor(p*q) + Math.floor(p*r); i < p; i++) {
    out[i] = new Bird(2, 0);
  }
  return out
}


var determinePayoff = (v, c, d, player, opponent) => {
  if (player.strategy == 0 && opponent.strategy == 0) {
    return (v-d)/2;
  } else if (player.strategy == 0 && opponent.strategy == 1) {
    return v;
  } else if (player.strategy == 0 && opponent.strategy == 2) {
    return v;
  } else if (player.strategy == 1 && opponent.strategy == 0) {
    return -c;
  } else if (player.strategy == 1 && opponent.strategy == 1) {
    return (v-c)/2;
  } else if (player.strategy == 1 && opponent.strategy == 2) {
    return v;
  } else if (player.strategy == 2 && opponent.strategy == 0) {
    return 0;
  } else if (player.strategy == 2 && opponent.strategy == 1) {
    return 0;
  } else {
    return v/2
  }
}

var updatePayoffs = (pop, v, c, d) => {
  for (const i of Array(pop.length).keys()) {
    let bird = pop[i]
    const opponent = pop[Math.floor(Math.random() * Math.floor(pop.length))]
    bird.payoff = determinePayoff(v, c, d, bird, opponent)
  }
}

var updatePopulation = (pop, k) => {
  for (const x of Array(k).keys()) {
    let bird = pop[Math.floor(Math.random() * Math.floor(pop.length))]; 
    const compareTo = pop[Math.floor(Math.random() * Math.floor(pop.length))];
    if (compareTo.payoff > bird.payoff) {
      bird.strategy = compareTo.strategy;
    }
  }
}

var countPopulation = (population) => {
  let hawk = 0;
  let crow = 0
  let dove = 0;
  for (const i of Array(population.length).keys()) {
    const bird = population[i]
    if (bird.strategy == 0){
      hawk += 1;
    } else if (bird.strategy == 1) {
      crow += 1;
    } else {
      dove += 1;
    }
  }
  return [hawk, crow, dove, (hawk)/(population.length), (crow)/(population.length), (dove)/(population.length)];
}

var popStats = [];
var population;

export class ImitationSimulation3D extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      run: this.props.run
    };
    population = initializePopulation(this.props.p, this.props.q, this.props.r)
    popStats = []

    for (const i of Array(this.props.n).keys()) {
      let [hawk, crow, dove, hawkRatio, crowRatio, doveRatio] = countPopulation(population);
      var x = new PopulationStatistics(i, hawk, crow, dove, hawkRatio, crowRatio, doveRatio);
      console.log(x)
      popStats.push(x)
      updatePayoffs(population, this.props.v, this.props.c, this.props.d);
      updatePopulation(population, this.props.k);
    }
  }

  componentDidUpdate() {
    console.log(this.props.q)
    population = initializePopulation(this.props.p, this.props.q, this.props.r)
    popStats = []

    for (const i of Array(this.props.n).keys()) {
      let [hawk, crow, dove, hawkRatio, crowRatio, doveRatio] = countPopulation(population);
      var x = new PopulationStatistics(i, hawk, crow, dove, hawkRatio, crowRatio, doveRatio);
      console.log(x)
      popStats.push(x)
      updatePayoffs(population, this.props.v, this.props.c, this.props.d);
      updatePopulation(population, this.props.k);
    }
  }


  render() {
    return (
      <Grid>
        <TableContainer component={Paper} >
          <Table size="small" aria-label="sticky table" >
          <TableHead>
              <TableRow >
                <TableCell><b>Round</b></TableCell>
                <TableCell align="right"><b>Hawks</b></TableCell>
                <TableCell align="right"><b>Crows</b></TableCell>
                <TableCell align="right"><b>Doves</b></TableCell>
                <TableCell align="right"><b>Hawk Proportion</b></TableCell>
                <TableCell align="right"><b>Crow Proportion</b></TableCell>
                <TableCell align="right"><b>Dove Proportion</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {popStats.map((row) => (
                <TableRow key={'round' + row.round}>
                  <TableCell component="th" scope="row">
                    {row.round}
                  </TableCell>
                  <TableCell align="right">{row.hawk}</TableCell>
                  <TableCell align="right">{row.crow}</TableCell>
                  <TableCell align="right">{row.dove}</TableCell>
                  <TableCell align="right">{row.hawkRatio}</TableCell>
                  <TableCell align="right">{row.crowRatio}</TableCell>
                  <TableCell align="right">{row.doveRatio}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    );
  }
}
  
export default ImitationSimulation3D;


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
    this.strategy = strategy; // 0 is hawk, 1 is dove
    this.payoff = payoff;
  }
}


class PopulationStatistics {
  constructor(round, hawk, dove, hawkRatio) {
    this.round = round; 
    this.hawk = hawk;
    this.dove = dove; 
    this.hawkRatio = hawkRatio;
  }
}


var initializePopulation = (p, v) => {
  let out = [];
  var i;
  for (i = 0; i < Math.floor(p*v); i++) {
    out[i] = new Bird(0, 0);
  }
  for (i = Math.floor(p*v); i < p; i++) {
    out[i] = new Bird(1, 0);
  }
  return out
}


var determinePayoff = (v, d, player, opponent) => {
  if (player.strategy == 0 && opponent.strategy == 0) {
    return (v-d)/2;
  } else if (player.strategy == 0 && opponent.strategy == 1) {
    return v;
  } else if (player.strategy == 1 && opponent.strategy == 0) {
    return 0;
  } else {
    return v/2
  }
}

var updatePayoffs = (pop, v, d) => {
  for (const i of Array(pop.length).keys()) {
    let bird = pop[i]
    const opponent = pop[Math.floor(Math.random() * Math.floor(pop.length))]
    bird.payoff = determinePayoff(v, d, bird, opponent)
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
  let dove = 0;
  for (const i of Array(population.length).keys()) {
    const bird = population[i]
    if (bird.strategy == 0){
      hawk += 1;
    } else {
      dove += 1;
    }
  }
  return [hawk, dove, (hawk)/(hawk+dove)];
}

var popStats = [];
var population;

export class ImitationSimulation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      run: this.props.run
    };
    population = initializePopulation(this.props.p, this.props.q)
    popStats = []

    for (const i of Array(this.props.n).keys()) {
      let [hawk, dove, hawkRatio] = countPopulation(population);
      var x = new PopulationStatistics(i, hawk, dove, hawkRatio);
      popStats.push(x)
      updatePayoffs(population, this.props.v, this.props.d);
      updatePopulation(population, this.props.k);
    }
  }

  componentDidUpdate() {
    population = initializePopulation(this.props.p, this.props.q)
    popStats = []

    for (const i of Array(this.props.n).keys()) {
      let [hawk, dove, hawkRatio] = countPopulation(population);
      var x = new PopulationStatistics(i, hawk, dove, hawkRatio);
      popStats.push(x)
      updatePayoffs(population, this.props.v, this.props.d);
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
                <TableCell align="right"><b>Doves</b></TableCell>
                <TableCell align="right"><b>Hawk Proportion</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {popStats.map((row) => (
                <TableRow key={'round' + row.round}>
                  <TableCell component="th" scope="row">
                    {row.round}
                  </TableCell>
                  <TableCell align="right">{row.hawk}</TableCell>
                  <TableCell align="right">{row.dove}</TableCell>
                  <TableCell align="right">{row.hawkRatio}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    );
  }
}
  
export default ImitationSimulation;


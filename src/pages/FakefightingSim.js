import { TextField } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PetsIcon from '@material-ui/icons/Pets';
import React, {useState, useEffect} from 'react';
import Navigation from '../components/Footer.js';
import PayoffMatrix3D from '../components/PayoffMatrix3D.js';
import ImitationSimulation3D from '../components/ImitationSimulation3D.js';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
  },
  text: {
    margin: theme.spacing(0),
  }

}));


export default function FakefightingSim() {
  const classes = useStyles();
  
  const boxMargin = 3;
  const boxMarginTop = 0;
  const boxMarginBottom = 0;
  
  const [v, setV] = React.useState(100)
  const [d, setD] = React.useState(5);
  const [c, setC] = React.useState(1);
  const [p, setP] = React.useState(500)
  const [q, setQ] = React.useState(.10);
  const [r, setR] = React.useState(.10);
  const [k, setK] = React.useState(200)
  const [n, setN] = React.useState(30);

  function setURL(newValue) {
    var currentURL = window.location.pathname;
    var goto = currentURL.concat("#/" + newValue);
    window.location.href = goto;
  }
    
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function handleVChange(e) {
    setV(e.target.value);
  }
  function handleDChange(e) {
    setD(e.target.value);
  }
  function handleCChange(e) {
    setC(e.target.value);
  }
  function handlePChange(e) {
    setP(e.target.value);
  }
  function handleQChange(e) {
    setQ(e.target.value);
  }
  function handleRChange(e) {
    setQ(e.target.value);
  }
  function handleKChange(e) {
    setK(e.target.value);
  }
  function handleNChange(e) {
    setN(e.target.value);
  }

  const [showResults, setShowResults] = React.useState(false)
  function computeSimulation() {
    setShowResults(true)
  }

  return (
    <Container component="main" maxWidth="md" className={classes.root}>
      <CssBaseline />
      <Grid item component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <PetsIcon />
          </Avatar>
          <Typography component="h1" variant="h5" >
            <Box lineHeight={2}>
              Multiplayer Simulation
            </Box>
          </Typography>
          <Typography component="p" >
            <Box lineHeight={2} m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
              Similar to the first simulation, we have a value, <i>v</i>, for the value of food and a damage, <i>d</i>,
              for the damage the loser of a fight incurs. Furthemore, we have the initial population
              size, <i>p</i>, of the birds, and a value, <i>q</i>, that denotes the initial proportion
              of the population that uses a hawk strategy. Only now, we also include a value, <i>c</i>, for the cost
              that a crow is willing to take and a value, <i>r</i> for the initial population size of the crows. Note that 
              the sum of <i>q</i> and <i>r</i> must be less than 1. 
            </Box>
            <Box lineHeight={2}  m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
              <br />
              Each round, the birds will all be paired against a random matchup to play the game.
              Their payoff values are computed and then stored. After each round, we choose a random number of birds, <i>k</i>, that 
              will each be randomly compared to another bird. If the other bird
              received a higher payoff, then the original bird will switch strategies to that of the other bird. Higher values of k will let 
              the population proportion converge faster, but the convergence will be less stable.
              We can run this simulation for n rounds and see how the population proportions tend to stabilize after a certain
              number of rounds.              
            </Box>
            <Box lineHeight={2}  m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
              <br />
              To start, let us choose v = {v}, d = {d}, c = {c}, p = {p}, q = {q}, r = {r}, k = {k}, and n = {n} with the payoff matrix show below.
            </Box>
          </Typography>
          <Box>
            <br />
          </Box>
          <PayoffMatrix3D v={parseInt(v)} d={parseInt(d)} c={parseInt(c)}/>

          <Typography component="p">
            <Box lineHeight={2}  m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
              <br />
              In other words, we start of with a population {p} birds, {p*q} of which play a hawk strategy, {p*r} of which play a crow strategy, 
              and {p - p*q - p*r} of which play a dove strategy. After each round, {k} birds randomly check out the payoff of another bird and switches to their strategy if the other bird's payoff is 
              better. We run this for {n} rounds, and see how the population proportion changes over time. 
               Let us run the simulation
              and see how it turns out! (Note that the simulation performance depends on random variable changes, so will change slightly each time.) 
              <br />
            </Box>
          </Typography>
          <Box>
            <br />
          </Box>

          <FormControlLabel
            control={
              <Button variant="outlined" color="primary" onClick={computeSimulation}>
                Run Simulation
              </Button>}
          />

          <Box>
            <br />
          </Box>

          <Grid>
            { showResults ?  <Grid className={classes.paper}>
              <ImitationSimulation3D v={parseInt(v)} d={parseInt(d)} c={parseInt(c)} p={parseInt(p)} q={parseFloat(q)} r={parseFloat(r)} k={parseInt(k)} n={parseInt(n)}/>
              <Typography component="p">
            <Box lineHeight={2}  m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
              <br />
              That's pretty cool! In case you caught on beforehand, we see that the values in row 1 are greater or equal to those in
              rows 2 and 3 for every column, so Hawk is clearly a theoretically stable strategy. 
              Through this simulation, we got to see the population of hawks, crows, and doves converge roughly to this 
              expected strategy.
              Let's try out different starting values in our sandbox to how the population
              proportion convertes to our predicted ESS.
              <br />
            </Box>
          </Typography>
                  </Grid>
             : null }
          </Grid>




          <Navigation buttonText={"try out the sandbox"} nextURL={"/fakefightingsandbox"} setURL={setURL}/>

          </div>
      </Grid>
    </Container>
  );
}


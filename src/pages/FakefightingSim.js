import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PetsIcon from '@material-ui/icons/Pets';
import React from 'react';
import Navigation from '../components/Footer.js';
import ImitationSimulation3D from '../components/ImitationSimulation3D.js';
import PayoffMatrix3D from '../components/PayoffMatrix3D.js';
import { NavLink } from "react-router-dom";

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
  
 

  const [v, setV] = React.useState(3)
  const [d, setD] = React.useState(10);
  const [c, setC] = React.useState(1);
  const [p, setP] = React.useState(100)
  const [r, setR] = React.useState(5);
  const [e, setE] = React.useState(-0.5);
  const [q, setQ] = React.useState(.10);
  const [l, setL] = React.useState(.10);
  const [z, setZ] = React.useState(.80);
  const [k, setK] = React.useState(-5)
  const [n, setN] = React.useState(50);

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
    setR(e.target.value);
  }
  function handleKChange(e) {
    setK(e.target.value);
  }
  function handleNChange(e) {
    setN(e.target.value);
  }

  const [run, setRun] = React.useState(false)
  const [showResults, setShowResults] = React.useState(false)
  function computeSimulation() {
    setShowResults(true)
    setRun(!run)
    console.log('ESS RUNS ONCE', run)
  }
  return (
    <Container component="main" maxWidth="md" className={classes.root}>
      <CssBaseline />
      <Fade in={true} timeout={1500}>

      <Grid item component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <NavLink to="/" style={{ textDecoration: 'none' }}>
              <Avatar className={classes.avatar}>
                <PetsIcon />
              </Avatar>
            </NavLink>
          <Typography component="h1" variant="h5" >
            <Box lineHeight={2}>
               Mock Fighting  Simulation
            </Box>
          </Typography>
            <Box lineHeight={2} m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
          <Typography component="p" >
              Similar to the first simulation, we have a value, <i>v</i>, for the value of food and a damage, <i>d</i>,
              for the damage the loser of a fight incurs. Furthemore, we have the initial population
              size, <i>p</i>, of the birds, and a value, <i>q</i>, that denotes the initial proportion
              of the population that uses a hawk strategy. Only now, we also include a value, <i>c</i>, for the cost
              that a crow is willing to take and a value, <i>l</i> for the initial population proportion of the crows. Note that 
              the sum of <i>q</i> and <i>l</i> must be less than 1. 
              <br />
              <br />
              The other values are the same as earlier, with <i>e</i> being the effort cost of living each turn, <i>r</i> being the reproductive threshold, and <i>k</i> being the "kill" threshold. In this case, 
              when a bird "dies", the new strategy that the replacement bird takes is randomly decided from the other two strategies.
              We can run this simulation for <i>n</i> rounds and see how the population proportions tend to stabilize after a certain
              number of rounds.   
              To start, let us choose <i>v</i> = {v}, <i>d</i> = {d}, <i>c</i> = {c}, <i>p</i> = {p}, <i>q</i> = {q}, <i>l</i> = l, <i>e</i> = {e}, <i>r</i> = {r}, <i>k</i> = {k}, and <i>n</i> = {n} with the payoff matrix show below.
          </Typography>
            </Box>
          <Box>
            <br />
          </Box>
          <PayoffMatrix3D v={parseInt(v)} d={parseInt(d)} c={parseInt(c)}/>

            <Box lineHeight={2}  m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
          <Typography component="p">
              <br />
      
               Let us run the simulation
              and see how it turns out! 
              <br />
          </Typography>
            </Box>
          <Box>
            <br />
          </Box>

          <Grid>
            { !showResults ? 
          <FormControlLabel
          control={
            <Button variant="contained" color="secondary" onClick={computeSimulation}>
              Run Simulation
            </Button>}
        />
             : null }
          </Grid>


          <Grid>
            { showResults ?  <Grid className={classes.paper}>
            <ImitationSimulation3D v={parseInt(v)} d={parseInt(d)} c={parseInt(c)} p={parseInt(p)} n={parseInt(n)} q={parseFloat(q)} l={parseFloat(l)} r={parseFloat(r)} e={parseFloat(e)} k={parseFloat(k)}  run={run}/>
            <Box lineHeight={2}  m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
              <Typography component="p">
              <br />
              That's pretty cool! With these sets of parameters,
              we see that mock fighting is a good strategy to play and is part of the evolutionary stable strategy. This, our crow strategy
               is known as a "worthwhile strategy"
              since it is in use once the population has reached stability. Play around with different variables
              to see how they impact the ESS in our sandbox!
              <br />
          </Typography>
            </Box>
            <Box>
            <br />
            <NavLink to={"/fakefightingsandbox"} style={{ textDecoration: 'none' }}>
              <Button size="large" fullWidth={true} variant="contained" color="primary">
                {"try out the sandbox"}
              </Button>
            </NavLink>
            </Box>
                  </Grid>
             : null }
          </Grid>




          <Navigation buttonText={"try out the sandbox"} nextURL={"/fakefightingsandbox"} setURL={setURL} showNext={true}/>

          </div>
      </Grid>
      </Fade>
    </Container>
  );
}



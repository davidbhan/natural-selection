import { Fade } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PetsIcon from '@material-ui/icons/Pets';
import React from 'react';
import Navigation from '../components/Footer.js';
import ImitationSimulation from '../components/ImitationSimulation.js';
import PayoffMatrix from '../components/PayoffMatrix2D.js';
import { NavLink } from 'react-router-dom'

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


export default function Ess() {
  const classes = useStyles();
  
  const boxMargin = 3;
  const boxMarginTop = 0;
  const boxMarginBottom = 0;
  
  const [v, setV] = React.useState(100)
  const [d, setD] = React.useState(5);
  const [p, setP] = React.useState(50)
  const [q, setQ] = React.useState(.3);
  const [r, setR] = React.useState(200)
  const [e, setE] = React.useState(-10)
  const [k, setK] = React.useState(-10)
  const [n, setN] = React.useState(25);

  function setURL(newValue) {
    var currentURL = window.location.pathname;
    var goto = currentURL.concat("#/" + newValue);
    window.location.href = goto;
  }

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const [showResults, setShowResults] = React.useState(false)
  function computeSimulation() {
    setShowResults(true)
  }

  return (
    <Container component="main" maxWidth="md" className={classes.root}>
      <CssBaseline />
      <Fade in={true} timeout={2000}>

      <Grid item component={Paper} elevation={6} square>

        <div className={classes.paper}>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              <Avatar className={classes.avatar}>
                <PetsIcon />
              </Avatar>
            </NavLink>
          <Typography component="h1" variant="h5" >
            <Box lineHeight={2}>
              Rules of the Simulation
            </Box>
          </Typography>
            <Box lineHeight={2} m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
          <Typography component="p" >
              In this simulation, we have a value, <i>v</i>, for the value of food and a damage, <i>d</i>,
              for the damage the loser of a fight incurs. Furthemore, we have the initial population
              size, <i>p</i>, that denotes the amount of birds, and a value, <i>q</i>, that denotes the initial proportion
              of the population that uses a hawk strategy. 
              <br />
              <br />
              Each bird starts off with 0 payoff. Each round, the birds will all be paired against a random matchup to play the game.
              Their payoff values are computed and then added to their previous count. Furthermore, each
              round will see the birds sustain a penalty, <i>e</i>, for the general expendature and cost of living.
               After each round, we check the bird's total payoff (think of it as life points). If their
               payoff is above a reproductive threshold, <i>r</i>, the bird will reproduce and we add a new bird
               of the same strategy to the population. If the bird is below a kill threshold, <i>k</i>, then
               that bird dies. However, to speed up computation, rather than removing the bird from the population, we instead
               have it switch strategies and reset its total payoff to 0.
              We run this simulation for <i>n</i> rounds and see how the population proportions tend to stabilize over time (though
              stabilization also depends heavily on the input parameters).              
              <br />
              <br />
              To start, let us choose <i>v</i> = {v}, <i>d</i> = {d}, <i>p</i> = {p}, <i>q</i> = {q}
              , <i>e</i> = {e}, <i>r</i> = {r}, <i>k</i> = {k}, and <i>n</i> = {n} with the payoff matrix show below.
          </Typography>
            </Box>
          <Box>
            <br />
          </Box>
          <PayoffMatrix v={parseInt(v)} d={parseInt(d)}/>

            <Box lineHeight={2}  m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
          <Typography component="p">
              <br />
              In other words, we start of with a population {p} birds, {p*q} of which play a hawk strategy. After each
              round, birds will have their total payoffs checked. They accordingly reproduce, do nothing, or "die" and switch strategies. We run this for {n} rounds, and see how the population proportion changes over time. 
              Note, as we discussed earlier, we should predict that the ESS would be a population full of hawks. Let us run the simulation
              and see how it turns out! (Note that the simulation performance depends on random variable changes, so will change slightly each time.) 
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
            { showResults ? <Grid className={classes.paper}>
              <ImitationSimulation v={parseInt(v)} d={parseInt(d)} p={parseInt(p)} q={parseFloat(q)} r={parseFloat(r)} e={parseFloat(e)} k={parseFloat(k)} n={parseInt(n)}/>
            <Box lineHeight={2}  m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
              <Typography component="p">
              <br />
              That's pretty cool! We see that the ratio of hawks
              converges to 1, just as we expected from our calculations.
              Let's try out different starting values in our sandbox to how the population
              proportion convertes to our predicted ESS.
              <br />
          </Typography>              
            </Box>


            <Box>
<br />
<NavLink to={"/esssandbox"} style={{ textDecoration: 'none' }}>
  <Button size="large" fullWidth={true} variant="contained" color="primary">
    {"try out the sandbox"}
  </Button>
</NavLink>
</Box>
              </Grid>

             : null }
          </Grid>



          <Navigation buttonText={"try out the sandbox"} nextURL={"/esssandbox"} setURL={setURL}  showNext={!showResults}/>

          </div>
      </Grid>
          </Fade>
    </Container>
  );
}



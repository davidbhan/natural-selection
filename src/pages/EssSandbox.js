import { TextField, Fade } from '@material-ui/core';
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
import PayoffMatrix from '../components/PayoffMatrix2D.js';
import ImitationSimulation from '../components/ImitationSimulation.js';
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
  },
  field: {
    '& > *': {
      margin: theme.spacing(1),
      width: '17ch',
    },
  }
}));


export default function EssSandbox() {
  const classes = useStyles();
  
  const boxMargin = 3;
  const boxMarginTop = 0;
  const boxMarginBottom = 0;
  
  const [v, setV] = React.useState(2)
  const [d, setD] = React.useState(5);
  const [p, setP] = React.useState(500)
  const [q, setQ] = React.useState(.10);
  const [z, setZ] = React.useState(.90);
  const [k, setK] = React.useState(50)
  const [n, setN] = React.useState(100);

  function setURL(newValue) {
    var currentURL = window.location.pathname;
    var goto = currentURL.concat("#/" + newValue);
    window.location.href = goto;
  }

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function getESS(v, d) {
    let length = 7;

    if (v == 0 && d == 0) {
      return " does not exist";
    } else if (parseInt(v) > parseInt(d)) {
      return " (" + (1.00).toString() + " Hawks, " + (0.00).toString() + " Doves)";
    }
    return " (" + (v/d).toString().substring(0, length) + " Hawks, " + ((1-v/d)).toString().substring(0, length) + " Doves)";
  }

  function handleVChange(e) {
    setV(e.target.value);
  }
  function handleDChange(e) {
    setD(e.target.value);
  }
  function handlePChange(e) {
    setP(e.target.value);
  }
  function handleQChange(e) {
    if (parseFloat(e.target.value) >= 1) {
      alert("This value must be less than 1 (e.g. 0.6)")
    }
    setQ(e.target.value);
    setZ(1 - e.target.value)
  }
  function handleZChange(e) {
    setZ(e.target.value);
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
    setRun(!run)
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
              Evolutionary Stable Strategy Imitation Simulation
            </Box>
          </Typography>
          <Typography component="p" >
            <Box lineHeight={2} m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
              Input the starting parameters of the population of your choice and then hit the 
              start simulation button once you are satisfied with the payoff matrix and population 
              parameters of your choice. Note that higher values of k will allow the population to change 
              far quicker, but the final result will be less stable. 
              <br />
            </Box>
          </Typography>
          <Box>
            <br />
          </Box>
              <Grid className={classes.paper}>
              Since all the computation is done in your browser, there may be a bit of lag with large inputs. Be sure to click the run simulation button each time you change the parameters! If anything breaks, just refresh the page :)
                
              </Grid>
          <Box>
            <br />
          </Box>

          <form autoComplete="off" className={classes.field}>
            <TextField id="value" defaultValue={parseInt(v)} type="number" label="Value (v)" onChange={handleVChange}/>
            <TextField id="damage" defaultValue={parseInt(d)} type="number" label="Damage (d)" onChange={handleDChange}/>
          </form>
          <Box>
            <br />
          </Box>


          <PayoffMatrix v={parseInt(v)} d={parseInt(d)}/>


          <Typography component="p">
            <Box lineHeight={2}  m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
              <br />
              <b>
              Expected Stable Strategy: 
              {getESS(v, d)}
              </b>
              <br />
            </Box>
          </Typography>
              


          <form autoComplete="off" className={classes.field}>
            <TextField id="population" defaultValue={parseInt(p)} type="number" label="Population (p)" onChange={handlePChange}/>
            <TextField id="learningRate" defaultValue={parseInt(k)} type="number" label="Learning Size (k)" onChange={handleKChange}/>
            <TextField id="rounds" defaultValue={parseInt(n)} type="number" label="Num. Rounds (n)" onChange={handleNChange}/>
          </form>
          <form autoComplete="off" className={classes.field}>
            <TextField id="hawks" defaultValue={parseFloat(q)} type="number" label="Hawk Ratio (q)" onChange={handleQChange}/>
            <TextField disabled id="doves" value={parseFloat(z)} variant="filled" label="Dove Ratio"/>
          </form>
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
            <br />
          </Box>

          <Grid>
            { showResults ? 
            <Grid className={classes.paper}>
              <ImitationSimulation v={parseInt(v)} d={parseInt(d)} p={parseInt(p)} q={parseFloat(q)} k={parseInt(k)} n={parseInt(n)} run={run}/>
              <Typography component="p">
                <Box lineHeight={2}  m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
                  <br />
                  The simulation is a powerful tool that shows off the convergence of a population of strategies
                  over time. But what if totally new strategies entered the population? What if an animal was willing
                  to put up a fighting display at a certain cost to try to scare away the doves?
                  <br />
                </Box>
              </Typography>             
            </Grid>
            : null }
          </Grid>


        



          <Navigation buttonText={"incorporating mock fighting strategies"} nextURL={"/fakefighting"} setURL={setURL}/>

          </div>
      </Grid>
    </Container>
  );
}



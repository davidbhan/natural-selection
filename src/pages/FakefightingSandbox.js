import { TextField } from '@material-ui/core';
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
  field: {
    '& > *': {
      margin: theme.spacing(1),
      width: '17ch',
    },
  }

}));


export default function FakefightingSandbox() {
  const classes = useStyles();
  
  const boxMargin = 3;
  const boxMarginTop = 0;
  const boxMarginBottom = 0;
  
  const [v, setV] = React.useState(2)
  const [d, setD] = React.useState(5);
  const [c, setC] = React.useState(1);
  const [p, setP] = React.useState(100)
  const [r, setR] = React.useState(3);
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
    if ((e.target.value + l) > 1) {
      alert("The sum of hawk and crow ratios must be less than 1")
    }
    setQ(e.target.value);
    setZ(1 - e.target.value - l);
  }
  function handleLChange(e) {
    if ((e.target.value + q) > 1) {
      alert("The sum of hawk and crow ratios must be less than 1")
    }
    setL(e.target.value);
    setZ(1 - e.target.value - q);
  }
  function handleKChange(e) {
    setK(e.target.value);
  }
  function handleEChange(e) {
    setE(e.target.value);
  }
  function handleRChange(e) {
    setR(e.target.value);
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
              Mock Fighting Sandbox
            </Box>
          </Typography>
            <Box lineHeight={2} m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
          <Typography component="p" >
            Input the starting parameters of the population of your choice and then hit the start simulation button once you are satisfied with the payoff matrix and population parameters of your choice. Note that higher values of k will allow the population to change far quicker, but the final result will be less stable.
          </Typography>
            </Box>
          <Box>
            <br />
          </Box>
          <Grid className={classes.paper} >
              <b>DO NOT INPUT EXTREMELY HIGH NUMBERS OTHERWISE YOUR BROWSER MAY RUN OUT OF MEMORY AND CRASH!</b>
              
              Be sure to click the run simulation button each time you change the parameters.
                
              </Grid>
          <Box>
            <br />
          </Box>
          <form autoComplete="off" className={classes.field}>
              <TextField id="value" defaultValue={parseInt(v)} type="number" label="Value (v)" onChange={handleVChange}/>
              <TextField id="damage" defaultValue={parseInt(d)} type="number" label="Damage (d)" onChange={handleDChange}/>
              <TextField id="cost" defaultValue={parseInt(c)} type="number" label="Cost (c)" onChange={handleCChange}/>
          </form>
          <Box>
            <br />
          </Box>


          <PayoffMatrix3D v={parseInt(v)} d={parseInt(d)} c={parseInt(c)}/>

          <Box>
            <br />
          </Box>

          <form autoComplete="off" className={classes.field}>
            <TextField id="population" defaultValue={parseInt(p)} type="number" label="Population (p)" onChange={handlePChange}/>
            <TextField id="rounds" defaultValue={parseInt(n)} type="number" label="Num. Rounds (n)" onChange={handleNChange}/>
          </form>
          <form autoComplete="off" className={classes.field}>
            <TextField id="hawks" defaultValue={parseFloat(q)} type="number" label="Hawk Ratio (q)" onChange={handleQChange}/>
            <TextField id="crows" defaultValue={parseFloat(l)} type="number" label="Crow Ratio (l)" onChange={handleLChange}/>
            <TextField disabled id="doves" value={parseFloat(z).toString().substring(0, 5)} label="Dove Ratio"/>
          </form>
          <form autoComplete="off" className={classes.field}>
            <TextField id="learningRate" defaultValue={parseFloat(k)} type="number" label="Kill (k)" onChange={handleKChange}/>
            <TextField id="learningRate" defaultValue={parseFloat(r)} type="number" label="Reproduce (r)" onChange={handleRChange}/>
            <TextField id="learningRate" defaultValue={parseFloat(e)} type="number" label="Effort (e)" onChange={handleEChange}/>
          </form>
          <Box>
            <br />
          </Box>

          <FormControlLabel
            control={
              <Button variant="contained" color="secondary" onClick={computeSimulation}>
                Run Simulation
              </Button>}
          />

          <Box>
            <br />
            <br />
          </Box>

          <Grid>
            { showResults ? <Grid className={classes.paper}>
            <ImitationSimulation3D v={parseInt(v)} d={parseInt(d)} c={parseInt(c)} p={parseInt(p)} n={parseInt(n)} q={parseFloat(q)} l={parseFloat(l)} r={parseFloat(r)} e={parseFloat(e)} k={parseFloat(k)}  run={run}/>
            <Box lineHeight={2}  m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
              <Typography component="p">
              <br />
              This has all been pretty fun, but what does this mean for me?

              <br />
          </Typography>             
            </Box>
            <Box>
            <br />
            <NavLink to={"/conclusion"} style={{ textDecoration: 'none' }}>
              <Button size="large" fullWidth={true} variant="contained" color="primary">
                {"conclusion"}
              </Button>
            </NavLink>
            </Box>
              </Grid>
             : null }
          </Grid>






          <Navigation buttonText={"conclusion"} nextURL={"/conclusion"} setURL={setURL} showNext={true}/>

          </div>
      </Grid>
      </Fade>
    </Container>
  );
}



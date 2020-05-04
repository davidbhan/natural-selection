import { TextField } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PetsIcon from '@material-ui/icons/Pets';
import React from 'react';
import Navigation from '../components/Footer.js';
import PayoffMatrix from '../components/PayoffMatrix2D.js';

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
    // width: '10ch'
  },
  field: {
    '& > *': {
      margin: theme.spacing(1),
      width: '17ch',
    },
  }

}));


export default function HawkdoveSandbox() {
  const classes = useStyles();
  
  const boxMargin = 3;
  const boxMarginTop = 0;
  const boxMarginBottom = 0;
  
  const [v, setV] = React.useState(10)
  const [d, setD] = React.useState(50);

  function setURL(newValue) {
    var currentURL = window.location.pathname;
    var goto = currentURL.concat("#/" + newValue);
    window.location.href = goto;
  }

  function handleVChange(e) {
    setV(e.target.value);
  }

  function handleDChange(e) {
    setD(e.target.value);
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

  return (
    <Container component="main" maxWidth="md" className={classes.root}>
      <CssBaseline />
      <Fade in={true} timeout={2000}>

      <Grid item component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <PetsIcon />
          </Avatar>
          <Typography component="h1" variant="h5" >
            <Box lineHeight={2}>
              Hawk Dove Game ESS Calculator
            </Box>
          </Typography>
          <Typography component="p" >

            <Box lineHeight={2}  m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
              <br />
              Take some time to experiment with different values of v and d before continuing on!
            </Box>
          </Typography>

          
          <form autoComplete="off" className={classes.field}>
            <TextField id="value" defaultValue={parseInt(v)} type="number" label="Value" onChange={handleVChange}/>
            <TextField id="damage" defaultValue={parseInt(d)} type="number" label="Damage" onChange={handleDChange}/>
          </form>
          <Box>
            <br />
          </Box>

          <PayoffMatrix v={parseInt(v)} d={parseInt(d)}/>

          <Typography component="p">
            <Box lineHeight={2}  m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
              <br />
              <b>
              Evolutionary Stable Strategy: 
              {getESS(v, d)}
              </b>
              <br />
            </Box>
          </Typography>
              



          <Typography component="p">
            <Box lineHeight={2}  m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
              <br />
              Okay, this is just a theoretical model. How would things look if we 
              actually ran a population simulation?
              <br />
            </Box>
          </Typography>

          <Navigation buttonText={"population simuation"} nextURL={"/ess"} setURL={setURL}/>

          </div>
      </Grid>
      </Fade>
    </Container>
  );
}



import { TextField } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PetsIcon from '@material-ui/icons/Pets';
import React from 'react';
import Navigation from '../components/Footer.js';
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


export default function Fakefighting() {
  const classes = useStyles();
  
  const boxMargin = 3;
  const boxMarginTop = 0;
  const boxMarginBottom = 0;
  
  const [v, setV] = React.useState(100)
  const [d, setD] = React.useState(5);
  const [c, setC] = React.useState(1);

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
                Scaring Away the Doves
              </Box>
            </Typography>
              <Box lineHeight={2} m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
            <Typography component="p" >
                Sometimes, animals may be willing to make a display and fight until they incur
                a certain level of damage. We will call animals who use this strategy crows, and 
                the cost that they are willing to fight up to <i>c</i>.
                <br />
                <br />
                Once again, we suppose the value of the fruit is v = 100 and that the cost of losing a fight
                is d = 5. However, now we have a new crow strategy who is willing to fight until a cost, c = 1, is
                taken. In this case, when a crow goes against a dove, the crow is able to get all the value
                for itself. However, when a crow goes up against a hawk, the crow is guaranteed to take
                a cost equal to c. When a crow fights another crow, they both have equal chances of winning
                and getting the fruit, or losing and incurring the cost. We can see the payoff matrix below:
                
                <br />
                <br />
            </Typography>
              </Box>

            <PayoffMatrix3D v={parseInt(v)} d={parseInt(d)} c={parseInt(c)}/>

              <Box lineHeight={2}  m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
            <Typography component="p">
                <br />
                Clearly it can pay off to be a crow rather than a dove in certain situations. 
                Try adjusting the values in the form below to see its effect on the payoff matrix above.
                You can also hover over a table cell to see how that value is computed. (Note that
                in this scenario, we always assume c > 0 and d > c. If c = 0, the the crow is just a dove.
                If c > d, then we can simply change the labels for the hawk and the crow.)
                <br />
            </Typography>
              </Box>
                

            <form autoComplete="off" className={classes.field}>
              <TextField id="value" defaultValue={parseInt(v)} type="number" label="Value" onChange={handleVChange}/>
              <TextField id="damage" defaultValue={parseInt(d)} type="number" label="Damage" onChange={handleDChange}/>
              <TextField id="cost" defaultValue={parseInt(c)} type="number" label="Cost" onChange={handleCChange}/>
            </form>

              <Box lineHeight={2}  m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
            <Typography component="p">
                <br />
                In a multiplayer game, it is possible for there to be multiple evolutionary stable strategies, and it's computation
                is not as straightforward as in a two person game. Instead, let's look at simulating a multistrategy
                population to see how it converges over several generations.
                The convergence to a strategy heavily depends on the initial breakdowns of a population as well as the parameters
                of the game. Of course, there is a bit of randomness as well due to the nature of the simulation.
                Let's take a look at how this would work.
                <br />
            </Typography>
              </Box>
              <Box>
            <br />
          </Box>
            <Navigation buttonText={"Simulating a multistrategy population"} nextURL={"/fakefightingsimulation"} setURL={setURL}/>

            </div>
        </Grid>
      </Fade>
    </Container>
  );
}


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
import React from 'react';
import Navigation from '../components/Footer.js';
import PayoffMatrix from '../components/PayoffMatrix2D.js';
import Fade from '@material-ui/core/Fade'

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


export default function Hawkdove() {
  const classes = useStyles();
  
  const boxMargin = 3;
  const boxMarginTop = 0;
  const boxMarginBottom = 0;
  
  const [v, setV] = React.useState(100)
  const [d, setD] = React.useState(5);

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

  return (
    <Container component="main" maxWidth="md" className={classes.root}>
      <CssBaseline />
      <Fade in={true} timeout={1500}>
        <Grid item component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <PetsIcon />
            </Avatar>
            <Typography component="h1" variant="h5" >
              <Box lineHeight={2}>
                The Hawk Dove Game
              </Box>
            </Typography>
            <Typography component="p" >
              <Box lineHeight={2} m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
                Imagine you are a bird searching for food and you find a fruit on the ground.
                However, another bird reaches the food at the same time as you. 
                Do you fight with the other bird for sole ownership of the food,
                or do you try to peacefully share it?
                The answer to this question is is hard to determine without quantifying the utility and risk of our decisions,
                so let us add some concrete values for context.
              </Box>
              <Box lineHeight={2}  m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
                <br />
                Suppose that the value of the fruit is v = 100 and that the cost of losing a fight
                is d = 5. If you choose to fight (Hawk) and the other person chooses to negotiate (Dove),
                you can aggressively claim the value of fruit for yourself at no cost. 
                If you both choose to negotiate (Dove),
                the value of the fruit will be shared equally among the two of you. Lastly, if you 
                both choose to fight (Hawk), you both have an equal chance of winning the entire value of 
                of the fruit, but also an equal chance of losing the fight and taking a 
                damage penalty for losing. We can model
                this through a payoff matrix that shows the outcomes of each matchup below: 
                (Hover over the cells for an explanation of how they are calculated!)
                <br />
                <br />
              </Box>
            </Typography>

            <PayoffMatrix v={parseInt(v)} d={parseInt(d)}/>

            <Typography component="p">
              <Box lineHeight={2}  m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
                <br />
                In this case, it is clear that you should always play a hawk strategy since you are 
                always better off regardless of what your opponents plays. But what if the value of the fruit
                or the damage of losing a fight changes? 
                For example, what if we set the fruit value to v = 5 and d = 20 instead? 
                Try adjusting the values of v and d below to see their effects on the payoff matrix.
                <br />
              </Box>
            </Typography>
                

            <form autoComplete="off" className={classes.field} >
              <TextField id="value" defaultValue={parseInt(v)} type="number" label="Value" onChange={handleVChange}/>
              <TextField id="damage" defaultValue={parseInt(d)} type="number" label="Damage" onChange={handleDChange}/>
            </form>

            <Typography component="p">
              <Box lineHeight={2}  m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
                <br />
                Sometimes, the optimal strategy you should play is not so clear. Instead of being a 
                "pure strategy" (i.e. always playing dove or always playing hawk), the
                optimal might be a "mixed strategy" (e.g. playing dove 50% of the time). 

                Furthermore, the ideal strategy to play also depends on what the rest of the population
                is doing, as we will see shortly.

                The strategies that we want to find are ones that dominate other strategies  
                over many iterations of this game as long as the majority
                of a population uses it. These strategies are 
                 known as evolutionary stable strategies (ESSs).
                <br />
              </Box>
            </Typography>

            <Navigation buttonText={"How do we find an ESS?"} nextURL={"/hawkdovesimulation"} setURL={setURL}/>

            </div>
        </Grid>
      </Fade>
    </Container>
  );
}



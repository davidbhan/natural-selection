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
import React, {useState, useEffect} from 'react';
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
  }

}));


export default function HawkdoveSandbox() {
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
      <Fade in={true} timeout={2000}>

      <Grid item component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <PetsIcon />
          </Avatar>
          <Typography component="h1" variant="h5" >
            <Box lineHeight={2}>
              Calculating the Optimal Strategies
            </Box>
          </Typography>
          <Typography component="p" >
            <Box lineHeight={2} m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
              The key to determining the optimal strategy is to find one that is "evolutionary stable".
              But what exactly does that mean? 
              Suppose we have a population of birds that always play dove. One day a single bird decides to 
              play the hawk strategy, and proceeds to dominate every other bird it encounters.
              As the bird get more food and resources, other birds see its success and also
              play the hawk strategy. Over time, the population of hawks skyrockets, while the population
              of doves drop. The optimal balance of hawks and doves in the ESS. 
              Let's see if we can come up with a set of rules to determine the 
              ESS depending on the values of v and d.
            </Box>
            <Box lineHeight={2}  m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
              <br />
              Look at the original payoff matrix below. It is clear that when the 
              the values of the first row are greater than the values of the second row,
              a pure hawk strategy is the way to go regardless of what the others are doing.
              This gives us our first condition of finding an ESS.
            </Box>
          </Typography>
          <Box>
            <br />
          </Box>
          <PayoffMatrix v={parseInt(v)} d={parseInt(d)}/>
          <Typography component="p">
            <Box lineHeight={2}  m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
              <br />
              <i>
              1. When row 1 > row 2 in both columns, a pure hawk strategy is an evolutionary stable strategy.
              </i>
              <br />
            </Box>
          </Typography>
              
          <Typography component="p" >
            <Box lineHeight={2}  m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
              <br />
              Now what if the value of the fruit were equal to the damage that you would take if you
              lose a fight? Let us take a look at the payoff matrix where v = d = 10. In this case, 
              if you were playing against a hawk, your gain from the encounter would be 0 regardless
              of whether you use a hawk strategy or a dove strategy. However, if you were matched up
              against a dove, you would come out ahead by playing the hawk strategy. Thus, the hawk strategy
              is always at least as good as the dove strategy, and sometimes better. This gives 
              our second condition for finding an ESS. 
            </Box>
          </Typography>
          <Box>
            <br />
          </Box>
          <PayoffMatrix v={10} d={10}/>
          <Typography component="p">
            <Box lineHeight={2}  m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
              <br />
              <i>
              2. When row 1 = row 2 in one column, and row 1 > row 2 in the other column, a pure hawk strategy is evolutionary stable.
              </i>
              <br />
            </Box>
          </Typography>

          <Typography component="p" >
            <Box lineHeight={2}  m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
              <br />
              One might wonder what would happen in the edge case if somehow both the value and damage were set to 0.
              In this situation, there is no ESS since each strategy is equally as good the next.
            </Box>
          </Typography>
          <Box>
            <br />
          </Box>
          <PayoffMatrix v={0} d={0}/>
          <Typography component="p">
            <Box lineHeight={2}  m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
              <br />
              <i>
              3. When row 1 = row 2 in both columns, no strategy is evolutionary stable.
              </i>
              <br />
            </Box>
          </Typography>

          <Typography component="p" >
            <Box lineHeight={2}  m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
              <br />
              In the last case, where the damage you risk taking is larger than the value of the food (i.e. v > d),
              there is no pure evolutionary stable strategy. Intead, we can compute the ideal proportion
              of Hawk and Dove strategies using a bit of basic algebra as well as the knowledge that 
              the evolutionary stable strategy must have the same or better payoff against any other strategy.
              We skip the algebra for brevity (<a href="https://en.wikipedia.org/wiki/Chicken_(game)">details here</a>), and
              show the ideal ratio of hawks to doves is <i>v/d</i> hawks to <i>(1 - v/d)</i> doves. In other words, 
              the population would be resistant to change if the population consisted of a proportion 
              of <i>v/d</i> hawks.
            </Box>
          </Typography>
          <Box>
            <br />
          </Box>
          <PayoffMatrix v={10} d={100}/>
          <Typography component="p">
            <Box lineHeight={2}  m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
              <br />
              <i>
              4. When row 1 {"<"} row 2 in one column, and row 1 > row 2 in the other column, the evolutionary 
              stable stategy will be a mixture of v/d hawks and (1-v/d) doves.
              </i>
              <br />
            </Box>
          </Typography>



          <Typography component="p">
            <Box lineHeight={2}  m={boxMargin} mt={boxMarginTop} mb={boxMarginBottom}>
              <br />
              Now that you have an idea of how we can compute the ESS, take some time to 
              play around with different values of v and d in our sandbox and see their corresponding
              evolutionary stable strategy.
              <br />
            </Box>
          </Typography>

          <Navigation buttonText={"try out the sandbox"} nextURL={"/hawkdovesandbox"} setURL={setURL}/>

          </div>
      </Grid>
      </Fade>
    </Container>
  );
}



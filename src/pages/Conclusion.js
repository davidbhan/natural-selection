import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import PetsIcon from '@material-ui/icons/Pets';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import Slide from '@material-ui/core/Slide';
import { NavLink } from "react-router-dom";


function setValue(newValue) {
  var currentURL = window.location.pathname;
  var rootURL = currentURL.replace('conclusion', '')
  var goto = rootURL.concat("#/" + newValue);
  window.location.href = goto;
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
                        <Link href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=MATH3911" variant="body2">
                    {"MATH3911 Game Theory"}
                  </Link>
                  <br />
      The University of Hong Kong 
      <br />
      Released May 2020
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1486406029622-f2cf84b50af6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1312&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'left',
  },
  paper: {
    margin: theme.spacing(4, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Conclusion() {
  const classes = useStyles();

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Grid container component="main" className={classes.root}>
    <CssBaseline />
    <Slide direction="right" in={true} mountOnEnter unmountOnExit timeout={1000}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Slide>

    <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={1000}>
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
        <Fade in={true} timeout={2500}>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              <Avatar className={classes.avatar}>
                <PetsIcon />
              </Avatar>
            </NavLink>
        </Fade>

        <Fade in={true} timeout={2500}>
        <Box lineHeight={2}>
      <Typography component="p">
          <br />
          Unbeknowest to the participating animals, all of them were playing by the rules
          of the complex game of life. Unlike them, however, you have the chance and the ability
          to have a clearer idea of the world around you. 
          <br />
          <br />
          Obviously, the rules of the game shown here are far
          simpler than those found in the real world, but this formaulation of thinking can be used
          to explain not just the behavior of animals, but also of humans. (For example, why are children
          more likely to engage in fighting over treats and toys than adults? Think about the perceived cost of 
          fighting and value of treats in children compared to adults.)
          <br />
          <br />
          Now, it is extraordinarily difficult to quantify the exact value of food and the cost of 
          injuries in the real world. Utility is not only subject to each individual, but it is also
          relative to available opportunities. Nonetheless, the inability to completely accurately
          quantify value mathematicallly does not stop us from creating and understanding useful models
          of the world around us, as is widely done in economics. 
          <br />
          <br />
          Nature and the world around us can be such a seemingly complex environment. Take a step back,
          however, and we can begin to see the rules that govern things. 
      </Typography>
        </Box>
    </Fade>


        <Box>
          <br />
        </Box>

        <Box>
          <Fade in={true} timeout={3000}>
            <a href="https://plato.stanford.edu/entries/game-evolutionary/">
              <Button formAction="">
                Continue your learning
              </Button>
            </a>
          </Fade>
        </Box>



        <Fade in={true} timeout={3000}>
        <Grid container className={classes.paper}>
            <Grid>
              <i>
                  Go back to the tools here!
                  </i> <br />
            </Grid>
          <BottomNavigation
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
          >
              <BottomNavigationAction label="Evolutionary Stable Strategy Calculator" value="hawkdovesandbox" icon={<AccessibilityNewIcon />} />
              <BottomNavigationAction label="Evolutionary Stable Strategy Simulation" value="esssandbox" icon={<SportsHandballIcon />} />
              <BottomNavigationAction label="Mock Fighting Simulation" value="fakefightingsandbox" icon={<SportsKabaddiIcon />} />

          </BottomNavigation>
        </Grid>
        </Fade>

        
        <Fade in={true} timeout={3000}>
          <Box mt={3} >
            <Copyright />
          </Box>
        </Fade>

      </div>
    </Grid>
    </Slide>
  </Grid>


  );
}

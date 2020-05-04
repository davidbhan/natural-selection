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


function setValue(newValue) {
  var currentURL = window.location.pathname;
  var goto = currentURL.concat("#/" + newValue);
  window.location.href = goto;
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1575477493388-c3ccb0a00868?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
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
    margin: theme.spacing(0),
    backgroundColor: theme.palette.secondary.main,
  },

}));


export default function Introduction() {
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
            <Avatar className={classes.avatar}>
              <PetsIcon />
            </Avatar>
          </Fade>

          <Fade in={true} timeout={2500}>
            <Typography component="h1" variant="h5" >
              <Box lineHeight={2}>
                Evolutionary Game Theory
              </Box>
            </Typography>
          </Fade>

          <Fade in={true} timeout={2500}>
            <Typography component="p">
              <Box lineHeight={2}>
                Have you ever watched a nature documentary and thought to yourself, why don't animals
                simply share food with one another? Or alternatively, why don't they completely eliminate
                their enemies to prevent future conflict? 
              </Box>

              <Box>
                <br />
              </Box>
              <Box lineHeight={2}>
                When animals fight, be it over foods or mates, we usually see a lot of posturing and mock 
                fighting that only moderately injures the participants. How do animals know when to stop
                fighting? And, what drives this behavior?
              </Box>
              <Box>
                <br />
              </Box>
              <Box lineHeight={2}>
                Part of the answer lies in something called <b>Evolutionary Stable Strategies</b>. Let us
                take a close look at what exactly this is, and how it plays out in the world around us.
              </Box>
            </Typography>
          </Fade>

          <Box>
            <br />
          </Box>

          <Box fullWidth={true}>
            <Fade in={true} timeout={3000}>
              <NavLink to="/hawkdove" style={{ textDecoration: 'none' }}>
                <Button size="large" fullWidth={true} variant="contained" color="primary">
                  Begin
                </Button>
              </NavLink>
            </Fade>
          </Box>

          <Box>
            <br />
          </Box>
          <Box>
            <br />
          </Box>

          <Fade in={true} timeout={3000}>
          <Grid container className={classes.paper}>
            <Grid>
                  Skip ahead to the tools here!
                  <br />
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
          <Box>
            <br />
          </Box>
          <Box>
            <br />
          </Box>
          <Box>
            <br />
          </Box>
          <Fade in={true} timeout={3000}>
          <Grid container>
            <Grid container className={classes.paper}>

                <Copyright />
            </Grid>
          </Grid>
          </Fade>

        </div>
      </Grid>
      </Slide>
    </Grid>
  );
}

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';
import React from 'react';
import { NavLink } from "react-router-dom";


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">

<br />
The University of Hong Kong 
<br />
Released May 2020
</Typography>
    );
  }

export class Navigation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showNext: this.props.showNext
      };

    }
  
    render() {
      return (
      <Grid>

        { !this.state.showNext ? 
        <Box>
        <br />
        <NavLink to={this.props.nextURL} style={{ textDecoration: 'none' }}>
          <Button size="large" fullWidth={true} variant="contained" color="primary">
            {this.props.buttonText}
          </Button>
        </NavLink>
        </Box>
        : null }

  
      <Box>
        <br />
        <br />
        <BottomNavigation
          onChange={(event, newValue) => {
            this.props.setURL(newValue);
          }}
          showLabels
        >
          <BottomNavigationAction label="Introduction" value="home" icon={<PlayCircleOutlineIcon />} />
          <BottomNavigationAction label="Evolutionary Stable Strategy Calculator" value="hawkdovesandbox" icon={<AccessibilityNewIcon />} />
          <BottomNavigationAction label="Evolutionary Stable Strategy Sandbox" value="esssandbox" icon={<SportsHandballIcon />} />
          <BottomNavigationAction label="Mock Fighting Sandbox" value="fakefightingsandbox" icon={<SportsKabaddiIcon />} />
          <BottomNavigationAction label="Conclusion" value="conclusion" icon={<CheckCircleOutlineIcon />} />
        </BottomNavigation>
      </Box>
  
      <Box mt={3} mb={2}>
        <br />
        <Copyright />
      </Box>
      </Grid>
      );
    }
  }
  
  
export default Navigation;
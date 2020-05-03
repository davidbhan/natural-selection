import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';


export class PayoffMatrix3D extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <Grid>
        <TableContainer component={Paper} style={{ width: "100%" }} pt={3} >
          <Table  size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell> </TableCell>
                <TableCell align="right"><b>Hawk</b></TableCell>
                <TableCell align="right"><b>Crow</b></TableCell>
                <TableCell align="right"><b>Dove</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key="row0">
                <TableCell component="th" scope="row">
                  <b>Hawk</b>
                </TableCell>
                <Tooltip title="Computed as (v-d)/2 since there is equal probability of both winning and getting the value of the fruit or losing and getting nothing" arrow>
                  <TableCell align="right">{(this.props.v-this.props.d)/2}</TableCell>
                </Tooltip>
                <Tooltip title="Computed as v since if you play the hawk strategy against a crow, you get the full value of the fruit at no cost" arrow>
                  <TableCell align="right">{this.props.v}</TableCell>
                </Tooltip>
                <Tooltip title="Computed as v since if you play the hawk strategy against a dove, you get the full value of the fruit at no cost" arrow>
                  <TableCell align="right">{this.props.v}</TableCell>
                </Tooltip>
              </TableRow>
              <TableRow key="row1">
                <TableCell component="th" scope="row">
                  <b>Crow</b>
                </TableCell>
                <Tooltip title="This will always be -c since you will fight against the hawk until you incur cost" arrow>
                  <TableCell align="right">{0 - this.props.c}</TableCell>
                </Tooltip>
                <Tooltip title="Computed as (v-c)/2 you and your opponenet are equally likely to win or lose the fight" arrow>
                  <TableCell align="right">{(this.props.v-this.props.c)/2}</TableCell>
                </Tooltip>
                <Tooltip title="Computed as v since if you play the crow strategy against a dove, you get the full value of the fruit at no cost" arrow>
                  <TableCell align="right">{this.props.v}</TableCell>
                </Tooltip>
              </TableRow>
  
              <TableRow key="row2">
                <TableCell component="th" scope="row">
                  <b>Dove</b>
                </TableCell>
                <Tooltip title="This will always be 0 since your opponent will always get the full value of the food and you will get none" arrow>
                  <TableCell align="right">0</TableCell>
                </Tooltip>
                <Tooltip title="This will always be 0 since your opponent will always get the full value of the food and you will get none" arrow>
                  <TableCell align="right">0</TableCell>
                </Tooltip>
                <Tooltip title="Computed as v/2 you and your opponenet share the value equally" arrow>
                  <TableCell align="right">{this.props.v/2}</TableCell>
                </Tooltip>
              </TableRow>
  
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      );
    }
  }
  
export default PayoffMatrix3D;
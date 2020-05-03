import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import Table from '@material-ui/core/Table';
import rd3 from 'react-d3-library'


export class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: this.props.popStats
    };
  }

	render() {
		
		return (
      <div>
          {/* much wow */}
      </div>
		);
	}
}
 
export default Chart;

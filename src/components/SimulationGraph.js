
import React from 'react';
import CanvasJSReact from './canvasjs.react.js';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const isSamePop = (popStat1, popStat2) => {
  if (popStat1.length != popStat2.length) {
    return false
  } else {
    for (var i = 0; i < popStat1.length; i++){
      if (popStat1[i].hawk != popStat2[i].hawk) {
        return false
      } else if (popStat1[i].dove != popStat2[i].dove) {
        return false
      }
    }
  }
  return true 
}

var convert = (inputArray) => {
  console.log(inputArray);

  let hawkData = inputArray.map(x => { 
    const container = {};
    container['y'] = x.hawk;
    container['label'] = x.round;
    return container
  });

  let doveData = inputArray.map(x => { 
    const container = {};
    container['y'] = x.dove;
    container['label'] = x.dove;
    return container
  });


  let data = [{
    type: "spline",
    name: "Hawks",
    showInLegend: true,
    dataPoints: hawkData
  },
  {
    type: "spline",
    name: "Doves",
    showInLegend: true,
    dataPoints: doveData
  }]

  console.log(data);
  return data;
}


export class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        popStats: this.props.popStats,
        data: convert(this.props.popStats),
        run: this.props.run
    };

  }

  componentDidUpdate() {
    console.log(this.state.popStats[50].hawk)
    console.log(this.props.popStats[50].hawk)
    console.log(isSamePop(this.state.popStats, this.props.popStats))
    if (!isSamePop(this.state.popStats, this.props.popStats)) {
      console.log('State changed!')
      this.setState({
        popStats: this.props.popStats,
        data: convert(this.props.popStats),
      })
    }
  }

  render() {
    const options = {
        animationEnabled: true,	
        axisY : {
          title: "Number of Birds",
          includeZero: false
        },
        toolTip: {
          shared: true
        },
        data: this.state.data
    }
    
    return (
        <CanvasJSChart options = {options} />
    );
  }
  }


export default Chart;

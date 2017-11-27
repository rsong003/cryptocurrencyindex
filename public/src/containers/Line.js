
import React from 'react';
import {Component} from 'react';
import { render } from 'react-dom';
import Chart from './Chart';
// import bitcoinData from '../../../data.js'
// import { getData } from "./utils"
import {connect} from 'react-redux'
import { TypeChooser } from "react-stockcharts/lib/helper";



const mapStateToProps = (state) =>{
  return {
    bitcoinHistorical : state.BTC.bitcoinHistorical,
    bitcoin: state.BTC.bitcoinHistorical
  }
}

class ChartComponent extends Component {
	constructor(props){
		super(props)
		this.state = {
      data: this.props.bitcoin
		}
	}
	render() {
		const chartData = { data: this.state.data, ratio: 2, type: "hybrid", width: 225, }
		return (
			<div>
			
			<Chart data={chartData.data} />
			
			</div>
		)
	}
}

export default connect(mapStateToProps)(ChartComponent)




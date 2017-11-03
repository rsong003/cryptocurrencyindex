
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
	
	render() {
		const chartBitcoinData = { data: this.props.bitcoin, ratio: 2, type: "hybrid", width: 225, }
		
		return (
			<TypeChooser>
				{type => <Chart type={type} data={chartBitcoinData.data} />}
			</TypeChooser>
		)
	}
}

export default connect(mapStateToProps)(ChartComponent)
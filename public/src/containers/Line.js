
import React from 'react';
import {Component} from 'react';
import { render } from 'react-dom';
import Chart from './Chart';
// import bitcoinData from '../../../data.js'
// import { getData } from "./utils"
import {connect} from 'react-redux'

import { TypeChooser } from "react-stockcharts/lib/helper";



const mapStateToProps = (state) =>{
  console.log(state, 'this is the state in dashboard')
  //console.log('this is the state in main DASHBOARD', state)
  return {
    bitcoinHistorical : state.BTC.bitcoinHistorical,
    bitcoin: state.BTC.bitcoinHistorical
  }
}

class ChartComponent extends Component {
	// componentDidMount() {
	// 	const newBitcoinData = bitcoinData.bitcoinData.Data
	// 	console.log(newBitcoinData)
		
	//   for (let i = 0; i < newBitcoinData.length; i++){
	// 		let node = {date: new Date(newBitcoinData[i].time), open: newBitcoinData[i].open, high: newBitcoinData[i].high, low: newBitcoinData[i].low, close: newBitcoinData[i].close}
	// 		bitCoinArray.push(node)
	// 	}
	// 	console.log(bitCoinArray)
	// }
	
	render() {
		console.log(this.props.bitcoin, 'this is the props in line')
		const chartBitcoinData = { data: this.props.bitcoin, ratio: 2, type: "hybrid", width: 225, }
		// if (this.state == null) {
		// 	return <div>Loading...</div>
		// }
		return (
			<TypeChooser>
				{type => <Chart type={type} data={chartBitcoinData.data} />}
			</TypeChooser>
		)
	}
}

export default connect(mapStateToProps)(ChartComponent)
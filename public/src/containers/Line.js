
// import React from 'react';
// import { render } from 'react-dom';
// import Chart from './Chart';
// import bitcoinData from '../../../data.js'
// // import { getData } from "./utils"

// import { TypeChooser } from "react-stockcharts/lib/helper";

// const bitCoinArray = []

// export default class ChartComponent extends React.Component {
// 	componentDidMount() {
// 		const newBitcoinData = bitcoinData.bitcoinData.Data
// 		console.log(newBitcoinData)
		
// 	  for (let i = 0; i < newBitcoinData.length; i++){
// 			let node = {date: new Date(newBitcoinData[i].time), open: newBitcoinData[i].open, high: newBitcoinData[i].high, low: newBitcoinData[i].low, close: newBitcoinData[i].close}
// 			bitCoinArray.push(node)
// 		}
// 		console.log(bitCoinArray)
// 	}
	
// 	render() {
// 		console.log(fuck)
// 		const fuck = { data: bitCoinArray, ratio: 2, type: "hybrid", width: 225, }
// 		// if (this.state == null) {
// 		// 	return <div>Loading...</div>
// 		// }
// 		return (
// 			<TypeChooser>
// 				{type => <Chart type={type} data={fuck.data} />}
// 			</TypeChooser>
// 		)
// 	}
// }
// // render(
// // 	<ChartComponent />,
// // 	document.getElementById("root")
// // );

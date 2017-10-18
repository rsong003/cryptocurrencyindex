
import React from 'react';
import { render } from 'react-dom';
import Chart from './Chart';
// import { getData } from "./utils"

import { TypeChooser } from "react-stockcharts/lib/helper";


class ChartComponent extends React.Component {
	// componentDidMount() {
	// 	getData().then(data => {
	// 		console.log(data, 'this is the fucking data')
	// 		this.setState({ data })
	// 	})
	// }
	render() {
		const fuck = { data: [{ date: new Date(2012, 0, 1), open: 21, high: 32, low: 21, close: 30 }, { date: new Date(2013, 0, 1), open: 23, high: 32, low: 21, close: 60 }], ratio: 2, type: "hybrid", width: 225, }

		// if (this.state == null) {
		// 	return <div>Loading...</div>
		// }
		return (
			<TypeChooser>
				{type => <Chart type={type} data={fuck.data} />}
			</TypeChooser>
		)
	}
}
render(
	<ChartComponent />,
	document.getElementById("root")
);

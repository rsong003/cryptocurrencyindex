import React from "react";
import PropTypes from "prop-types";

var ReactHighstock = require('react-highcharts/ReactHighstock.src');
var Highlight = require('react-highlight');

class AreaChart extends React.Component {
	
	render() {
		var config = {
			rangeSelector: {
				selected: 1
			},
			series: [{
				name: 'BTC',
				type: 'area',
				data: this.props.data,
				tooltip: {
					valueDecimals: 2
				}
			}]
		};
		return (
			<div>
				<ReactHighstock config={config}/>
			</div>
		);
	}
}

export default AreaChart;
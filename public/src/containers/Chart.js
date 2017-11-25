import React from "react";
import PropTypes from "prop-types";
// import { format } from "d3-format";
// import { timeFormat } from "d3-time-format";
// import { scaleTime } from "d3-scale";
// import {
// 	CrossHairCursor,
// 	MouseCoordinateX,
// 	MouseCoordinateY,
// } from "react-stockcharts/lib/coordinates";
// import { ChartCanvas, Chart } from "react-stockcharts";
// import { AreaSeries } from "react-stockcharts/lib/series";
// import { XAxis, YAxis } from "react-stockcharts/lib/axes";
// import { fitWidth } from "react-stockcharts/lib/helper";
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

const rechartsData = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page z', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
			{name: 'Page D', uv: 2780, pv: 3908, amt: 2000}
]

class AreaCharts extends React.Component {
	render() {
		const { data, type, width, ratio } = this.props;
		console.log(JSON.stringify(data[0].date))
		return (
			<AreaChart width={600} height={400} data={data}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <XAxis dataKey="open"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
					<Area type='monotone' dataKey='open' stroke='#8884d8' fill='#8884d8' />
					<Area type='monotone' dataKey='close' stroke='#1884d8' fill='#1884d8' />
					<Area type='monotone' dataKey='high' stroke='#8824d8' fill='#8824d8' />
      </AreaChart>
			// 		margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
			// 		seriesName="MSFT"
			// 		data={data} type={type}
			// 		xAccessor={d => d.date}
			// 		xScale={scaleTime()}>
			// 	<Chart id={0} yExtents={d => d.close} height={150}>
			// 		<XAxis axisAt="bottom" orient="bottom" ticks={6}/>
			// 		<YAxis axisAt="left" orient="left" />
			// 		<AreaSeries yAccessor={d => d.close}/>
      //     <MouseCoordinateX
			// 			at="bottom"
			// 			orient="bottom"
			// 			displayFormat={timeFormat("%Y-%m-%d")} />
			// 		<MouseCoordinateY
			// 			at="left"
			// 			orient="left"
			// 			displayFormat={format(".4s")} />
			// 	</Chart>
      //   <CrossHairCursor />
			// </ChartCanvas>
		);
	}
}


// AreaChart.propTypes = {
// 	data: PropTypes.array.isRequired,
// 	width: PropTypes.number.isRequired,
// 	ratio: PropTypes.number.isRequired,
// 	type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
// };

// AreaChart.defaultProps = {
// 	type: "svg",
// };
// AreaChart = fitWidth(AreaChart);

export default AreaCharts;
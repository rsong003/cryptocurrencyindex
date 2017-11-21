import React, {Component} from 'react'
import {VictoryPie} from 'victory'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    marketShares : state.openPrices.marketShares
  }
}


class PieChart extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
    <div>
      {this.props.marketShares.BTC !== undefined ? 
      <VictoryPie
        data={[
          { x: "BTC", y: this.props.marketShares.BTC },
          { x: "ETH", y: this.props.marketShares.ETH },
          { x: "BCH", y: this.props.marketShares.BCH },
          { x: "DASH", y: this.props.marketShares.DASH },
          { x: "LTC", y: this.props.marketShares.LTC },
          { x: "NEO", y: this.props.marketShares.NEO },
          { x: "XEM", y: this.props.marketShares.XEM },
          { x: "XRP", y: this.props.marketShares.XRP },
          { x: "XMR", y: this.props.marketShares.XMR },
          { x: "ETC", y: this.props.marketShares.ETC }
        ]} 
        animate={{
          duration: 1000
        }}
        innerRadius={100}
        colorScale={['#5DA5DA', 'FAA43A', 'tomato', "orange", "gold", "cyan", "#60BD68", "#B2912F", "#B276B2", "#4D4D4D"]}
        labels={(d) => ``}
      /> : <div></div>
      }
    </div>
    )
  }
}
export default connect(mapStateToProps)(PieChart)

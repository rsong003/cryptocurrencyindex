import React, {Component} from 'react'

import Tick from './Tick.js'

export default class CryptoTicker extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const coins = ['BTC', 'ETH', 'ETC', 'LTC', 'NEO', 'XEM', 'XMR', 'XRP', 'DASH', 'BCH']
    return (
      <div>
        {coins.map((coin, i) => {
          return <Tick key={i} coinName={coins[i]} data={this.props.openPrices[coins[i]]} />
        })}
      </div>
    )
  }
}

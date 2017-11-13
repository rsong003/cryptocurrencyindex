import React, {Component} from 'react'
import io from 'socket.io-client'
import CCC from '../tickerHelper.js'


const getDifference = (price, open) => {
  let difference = ((price - open) / open) * 100;
  return round(difference, 2)
}
const round = (value, decimals) => {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}


export default class Tick extends Component {
  constructor(props){
    super(props)
    this.state = {
      price: this.props.data.USD.PRICE,
      openPrice: this.props.data.USD.OPENDAY,
      name: this.props.coinName,
      increaseOrDecrease: null
    }
  }
  componentDidMount(){
    var CryptoTicker = this;
    this.socket = io('/');
    var socket = io.connect('https://streamer.cryptocompare.com/');
    var subscription = [`5~CCCAGG~${this.state.name}~USD`];
	  socket.emit('SubAdd', { subs: subscription });
	  socket.on("m", function(message) {
		  var messageType = message.substring(0, message.indexOf("~"));
      var res = {};
      // var coins = {BTC: 'BTC', ETC: 'ETC', ETH: 'ETH', LTC: 'LTC', NEO: 'NEO', XEM: 'XEM', XMR: 'XMR', XRP: 'XRP', DASH: 'DASH', BCH: 'BCH'}
		  if (messageType == CCC.STATIC.TYPE.CURRENTAGG) {
        res = CCC.CURRENT.unpack(message);
        if (res.FROMSYMBOL === CryptoTicker.state.name && res.PRICE && res.PRICE > CryptoTicker.state.price){
          CryptoTicker.setState({
            price: res.PRICE,
            increaseOrDecrease: 'increase'
          })
        } else if (res.FROMSYMBOL === CryptoTicker.state.name && res.PRICE && res.PRICE < CryptoTicker.state.price){
          CryptoTicker.setState({
            price: res.PRICE,
            increaseOrDecrease: 'decrease'
          })
        }
      }
    })
  }

  render(){
    let colorOfTick = null;
    if (this.state.increaseOrDecrease === 'increase'){
      colorOfTick = 'greenTick'
    } else if (this.state.increaseOrDecrease === 'decrease'){
      colorOfTick ='redTick'
    } else {
      colorOfTick = 'null'
    }
    return (
      <div className="row">
        <div className="col-sm-3">
          {this.state.name}
        </div>
        <div className="col-sm-5">
          <span className={colorOfTick}>{this.state.price}</span>
        </div>
        <div className="col-sm-4">
          {getDifference(this.state.price, this.state.openPrice)}
        </div>
      </div>
    )
  }
}
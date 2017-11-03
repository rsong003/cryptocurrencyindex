import React, {Component} from 'react'
import io from 'socket.io-client'
import CCC from '../tickerHelper.js'


export default class CryptoTicker extends Component{
  constructor(props){
    super(props)
    this.state = {
      BTC: 0,
      ETH: 0
    }
  }
  componentDidMount(){
    var CryptoTicker = this;
    this.socket = io('/');
    var socket = io.connect('https://streamer.cryptocompare.com/');
    var subscription = ['5~CCCAGG~BTC~USD', '5~CCCAGG~ETH~USD'];
	  socket.emit('SubAdd', { subs: subscription });
	  socket.on("m", function(message) {
		  var messageType = message.substring(0, message.indexOf("~"));
		  var res = {};
		  if (messageType == CCC.STATIC.TYPE.CURRENTAGG) {
        res = CCC.CURRENT.unpack(message);
        if (res.FROMSYMBOL === 'BTC' && res.PRICE){
          CryptoTicker.setState({
            BTC: res.PRICE
          }, ()=>{})
        }
        if (res.FROMSYMBOL === 'ETH' && res.PRICE){
          CryptoTicker.setState({ETH: res.PRICE})
        }
      }
    })
  }
  render(){
    console.log(this.state)
    return (
      <div>
        <div>{this.state.BTC}</div>
        <div>{this.state.ETH}</div>




      </div>
    )
  }
}

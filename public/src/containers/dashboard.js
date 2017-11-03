import React from 'react'
import {Component} from 'react'
import {render} from 'react-dom'
import ReactHighcharts from 'react-highcharts'
import ReactHighStock from 'react-highcharts/ReactHighStock.src'
import axios from 'axios'
import {Line} from 'react-chartjs-2';
import ChartComponent from './Line';
import {connect} from 'react-redux'
import {getHistoricalBitcoinPrice, updateBitcoinPrice } from '../actions/Bitcoin.js'
import {bindActionCreators} from 'redux'
import NewsComponent from './NewsComponent.js'
import CryptoTicker from './CryptoTicker'


const mapStateToProps = (state) =>{
  
  return {
    bitcoinHistorical : state.BTC.bitcoinHistorical,
    bitcoin: state.BTC.bitcoinHistorical,
    articles: state.newsArticles
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getHistoricalBitcoinPrice, updateBitcoinPrice}, dispatch)
}



class Dashboard extends Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    
  }
  render(){    
    return (
      <div className = "container">
        <div className = "row">
          <div className = "col-sm-3">Finance</div>
          <div className = "col-sm-9">Market Summary</div>
        </div>
        <div className = "row">
          <div className = "col-sm-3 title"> Markets</div>
          <div className = "col-sm-9">
          {this.props.bitcoinHistorical.length === 0 ? <div> ...Loading </div> : <ChartComponent />}
          </div>
        </div>
        <div className = "row">
          <div className = "col-sm-3"> Recent Quote 
            <CryptoTicker/>
          </div>
          <div className = "col-sm-9"> Top Stories 
          {this.props.articles.newsArticles.length === 0 ? <div> ...Loading </div> : <div><NewsComponent articles={this.props.articles}/></div>}
        </div>
      </div>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

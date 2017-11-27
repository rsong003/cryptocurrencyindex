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
import PieChart from './PieChart.js'
import MarketShares from './MarketShares.js'




const mapStateToProps = (state) =>{
  return {
    bitcoinHistorical : state.BTC.bitcoinHistorical,
    bitcoin: state.BTC.bitcoinHistorical,
    articles: state.newsArticles,
    openPrices: state.openPrices
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getHistoricalBitcoinPrice, updateBitcoinPrice}, dispatch)
}

class Dashboard extends Component{
  constructor(props){
    super(props)
    this.state = {
      input: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount(){
    axios.get('http://localhost:3030/getRedisData')
    .then(result => {
      let data = JSON.parse(result.data.allCryptos)
      console.log(data)
      
    })
  }
  handleInputChange(e){
    console.log(e.target.value)
    e.preventDefault()
    this.setState({
      input: e.target.value
    }, ()=> {console.log(this.state)})
  }
  handleSubmit(e){
    e.preventDefault()
    console.log("Input Value: ", e.target)
  }
  render(){
    console.log(this.props, 'this is the props in dashboard')
    return (
      <div className="container">
        <div className="row" id="topDash">
          <div className="col-sm-3"></div>
            <div className="col-sm-7">
              <div className="input-group">
                <form onSubmit={this.handleSubmit} className="searchBar">
                  <input type="text" onChange={this.handleInputChange} className="form-control" placeholder="Search for..." aria-label="Search for..."/>
                  <span className="input-group-btn">
                  <button className="btn btn-secondary" type="submit">Go!</button>
                  </span>
                </form>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div id="FinanceTitle">Finance</div>
            <div>Markets</div>
            <div className="piechart">
              <PieChart />
            </div>
            <div className="row">
              <div id ="marketShareTitle" className="col-sm-7">Market Shares</div>
              <div id ="marketSharePercentage"className="col-sm-5"></div>
            </div>
            <div className="row"> % of Market
              <div className="row">
                <div className="col-sm-12">
                  {this.props.openPrices.marketShares.XRP !== undefined ? <MarketShares data={this.props.openPrices.marketShares} /> : <div></div>}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="CurrentPrices">Current Prices</div>
                <div id="openPrices"className="col-sm-12">
                  {this.props.openPrices.openPrices.data ? <CryptoTicker openPrices={this.props.openPrices.openPrices.data.RAW}/> : <div>...Loading </div>} 
                </div>
              </div>
            </div>
          <div className = "col-sm-9">
            <div className = "row">
              <div className = "col-sm-3">  </div>
              <div id ="areaChart "className = "col-sm-9"> 
                {this.props.bitcoinHistorical.length === 0 ? <div> ...Loading </div> : <ChartComponent />}
              </div>
            </div>
            <div className = "row">
              <div className = "col-sm-12"> <span id="MarketSummary">Market Summary</span>
                {this.props.articles.newsArticles.length === 0 ? <div> ...Loading </div> : <div><NewsComponent articles={this.props.articles}/></div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

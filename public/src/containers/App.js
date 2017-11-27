import React, { Component } from 'react';
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Switch, PropsRoute } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {fetchHistoricalBitcoin, getHistoricalBitcoinPrice} from '../actions/Bitcoin.js'
import {fetchNewsArticles} from '../actions/NewsArticles.js'
import {fetchOpenPrices} from '../actions/Ticker.js'
import Login from './Login';



const mapStateToProps = (state) =>{
  return {
    
  }
}


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(fetchHistoricalBitcoin())
    dispatch(fetchNewsArticles())
    dispatch(fetchOpenPrices())
  }
  

  render(){
    return(
      <div> 
        <Dashboard />
        <Login />
        <BrowserRouter>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/" component={Login}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
export default connect(mapStateToProps)(App)
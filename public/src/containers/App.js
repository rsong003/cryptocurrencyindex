import React, { Component } from 'react';
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Switch, PropsRoute } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {fetchHistoricalBitcoin, getHistoricalBitcoinPrice} from '../actions/Bitcoin.js'
import {fetchNewsArticles} from '../actions/NewsArticles.js'
import Login from './Login';



const mapStateToProps = (state) =>{
  console.log(state, 'this is the state in app')
  return {
    
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({getHistoricalBitcoinPrice}, dispatch)
// }

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
  }
  

  render(){
    console.log(this.props, 'this is the props in app')
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
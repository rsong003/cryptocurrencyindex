import React, { Component } from 'react';
import Dashboard from './dashboard';
import { BrowserRouter, Route, Switch, PropsRoute } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {fetchHistoricalBitcoin, getHistoricalBitcoinPrice} from '../actions/index.js'
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
  }

  render(){
    console.log(this.props, 'this is the props in app')
    return(
      <div> 
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
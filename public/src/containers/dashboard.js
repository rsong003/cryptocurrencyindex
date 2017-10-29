import React from 'react'
import {Component} from 'react'
import {render} from 'react-dom'
import ReactHighcharts from 'react-highcharts'
import ReactHighStock from 'react-highcharts/ReactHighStock.src'
import axios from 'axios'
import {Line} from 'react-chartjs-2';
import ChartComponent from './Line';

class Dashboard extends Component{
  constructor(props){
    super(props)
    this.state = {
      crypto: {}
    }
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
            <ChartComponent /> 
          </div>
        </div>
        <div className = "row">
          <div className = "col-sm-3"> Recent Quote </div>
          <div className = "col-sm-9"> Top Stories </div>
        </div>
      </div>
    )
  }
}
export default Dashboard;

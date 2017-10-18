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
    console.log('hi')
    
    return (
      <div className = "container">
        <div className = "row">
          <div className = "col-sm-12">
            hi
            <ChartComponent /> 
          </div>
        </div>
      </div>
    )
  }
}
export default Dashboard;

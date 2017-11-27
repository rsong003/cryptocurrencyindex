import React , {Component} from 'react'


const round = (value, decimals) => {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}


export default class Share extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="row">
        <div className="col-sm-3">
          {this.props.coin}
        </div>
        <div className="col-sm-5">
          {round(this.props.data, 2)}
        </div>
        <div className="col-sm-4">
          {this.props.color}
        </div>
      </div>
    )
  }
}
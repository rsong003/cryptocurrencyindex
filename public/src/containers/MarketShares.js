import React , {Component} from 'react'
import Share from './Share.js'

const round = (value, decimals) => {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

export default class MarketShares extends Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props, 'this is the props in shares')
    const colorScale=['#5DA5DA', 'FAA43A', 'tomato', "orange", "gold", "cyan", "#60BD68", "#B2912F", "#B276B2", "#4D4D4D"]
    const coins = ['BTC', 'ETH', 'ETC', 'LTC', 'NEO', 'XEM', 'XMR', 'XRP', 'DASH', 'BCH']
    return (
      <div className="row">
        <div className="col-sm-12">
          <table className="table table-sm">
            <thead>
            </thead>
            <tbody>
              <tr>
                <td>BTC</td>
                <td>{round(this.props.data.BTC, 2)}</td>
                <td><span id="btcdash" className="glyphicon glyphicon-minus"></span></td>
                <td>ETH</td>
                <td>{round(this.props.data.ETH, 2)}</td>
                <td><span id="ethdash"className="glyphicon glyphicon-minus"></span></td>
              </tr>
              <tr>
                <td>ETC</td>
                <td>{round(this.props.data.ETC, 2)}</td>
                <td><span id="etcdash"className="glyphicon glyphicon-minus"></span></td>
                <td>LTC</td>
                <td>{round(this.props.data.LTC, 2)}</td>
                <td><span id="ltcdash"className="glyphicon glyphicon-minus"></span></td>
              </tr>
              <tr>
                <td>NEO</td>
                <td>{round(this.props.data.NEO, 2)}</td>
                <td><span id="neodash"className="glyphicon glyphicon-minus"></span></td>
                <td>XEM</td>
                <td>{round(this.props.data.XEM, 2)}</td>
                <td><span id="xemdash"className="glyphicon glyphicon-minus"></span></td>
              </tr>
              <tr>
                <td>XMR</td>
                <td>{round(this.props.data.XMR, 2)}</td>
                <td><span id="xmrdash"className="glyphicon glyphicon-minus"></span></td>
                <td>XRP</td>
                <td>{round(this.props.data.XRP, 2)}</td>
                <td><span id="xrpdash"className="glyphicon glyphicon-minus"></span></td>
              </tr>
              <tr>
                <td>DASH</td>
                <td>{round(this.props.data.DASH, 2)}</td>
                <td><span id="dashdash"className="glyphicon glyphicon-minus"></span></td>
                <td>BCH</td>
                <td>{round(this.props.data.BCH, 2)}</td>
                <td><span id="bchdash"className="glyphicon glyphicon-minus"></span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}


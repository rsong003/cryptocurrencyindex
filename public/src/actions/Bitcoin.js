import axios from 'axios';
export const UPDATE_BITCOIN_PRICE = 'UPDATE_BITCOIN_PRICE';
export const GET_HISTORICAL_BITCOIN = 'GET_HISTORICAL_BITCOIN';

export function updateBitcoinPrice(request) {
  return {
    type: UPDATE_BITCOIN_PRICE,
    payload: request
  };
}
export const getHistoricalBitcoinPrice = historical => ({
  type: GET_HISTORICAL_BITCOIN,
  payload: historical
}) 



export const fetchHistoricalBitcoin = coords => (dispatch) => {
  axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=30&e=CCCAGG')
  .then(result => {
    const bitcoinArray = []
    const areaArray = []
    var newBitcoinData = result.data.Data
    for (let i = 0; i < newBitcoinData.length; i++){
      let pricePointNode = {date: new Date(newBitcoinData[i].time * 1000), open: newBitcoinData[i].open, high: newBitcoinData[i].high, low: newBitcoinData[i].low, close: newBitcoinData[i].close}
      let areaNode = [Math.floor(newBitcoinData[i].time * 1000), newBitcoinData[i].close]
      bitcoinArray.push(pricePointNode)
      areaArray.push(areaNode)
    }
    console.log(areaArray, 'this is the areaArray')
    dispatch(getHistoricalBitcoinPrice(areaArray))
  })
}


//       {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
//       {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
//       {name: 'Page z', uv: 2000, pv: 9800, amt: 2290},
//       {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
//       {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
//       {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
//       {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
//       {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
//       {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
//       {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
// 			{name: 'Page D', uv: 2780, pv: 3908, amt: 2000}
// ]
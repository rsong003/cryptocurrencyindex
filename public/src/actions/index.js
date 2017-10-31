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
  axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&allData=true')
  .then(result => {
    console.log(result, 'this is the reuslt of the API call')
    const bitcoinArray = []
    var newBitcoinData = result.data.Data
    console.log(newBitcoinData)
    for (let i = 0; i < newBitcoinData.length; i++){
      let pricePointNode = {date: new Date(newBitcoinData[i].time), open: newBitcoinData[i].open, high: newBitcoinData[i].high, low: newBitcoinData[i].low, close: newBitcoinData[i].close}
      bitcoinArray.push(pricePointNode)
    }
    dispatch(getHistoricalBitcoinPrice(bitcoinArray))
  })
}


import axios from 'axios';

export const UPDATE_ETH_PRICE = 'UPDATE_ETH_PRICE';
export const GET_HISTORICAL_ETH = 'GET_ETH_BITCOIN';

export function updateEthereumPrice(request) {
  return {
    type: UPDATE_ETH_PRICE,
    payload: request
  };
}
export const getHistoricalEthereumPrice = historical => ({
  type: GET_HISTORICAL_ETH,
  payload: historical.data.Data
}) 

export const fetchHistoricalEthereum = coords => (dispatch) => {
  axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&allData=true')
  .then(result => {
    console.log(result, 'this is the reuslt of the API call')
    dispatch(getHistoricalEthereumPrice(result))
  })
}


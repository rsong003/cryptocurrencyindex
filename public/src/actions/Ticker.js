import axios from 'axios';

export const UPDATE_OPEN_PRICES = 'UPDATE_OPEN_PRICES';
export const GET_MARKET_SHARES ='GET_MARKET_SHARES';

export const getOpenPrices = prices => ({
  type: UPDATE_OPEN_PRICES,
  payload: prices
}) 
export const getCurrentMarketShares = prices =>({
  type: GET_MARKET_SHARES,
  payload: prices
})


export const fetchOpenPrices = prices => (dispatch) => {
  var marketShares = {}
  var totalMarket = 0
  axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,XMR,XRP,BCH,DASH,NEO,XEM,ETC&tsyms=USD')
  .then(result => {
    var data = result.data.RAW
    dispatch(getOpenPrices(result))
    for (var crypto in data) {
      totalMarket += data[crypto].USD.MKTCAP
    }
    for (var crypto in data){
      marketShares[crypto] = (data[crypto].USD.MKTCAP / totalMarket) * 100
    }
    dispatch(getCurrentMarketShares(marketShares))
  })
}


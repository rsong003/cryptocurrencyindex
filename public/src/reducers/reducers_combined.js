import { combineReducers } from 'redux';
import bitcoin from './btcReducer.js'
import ethereum from './ethReducer.js'
import articles from './articlesReducer.js'
import prices from './openPricesReducer.js'


const rootReducer = combineReducers({
  newsArticles: articles,
  BTC: bitcoin,
  ETH: ethereum,
  openPrices: prices
})

export default rootReducer;
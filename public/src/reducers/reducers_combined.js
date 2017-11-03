import { combineReducers } from 'redux';
import bitcoin from './btcReducer.js'
import ethereum from './ethReducer.js'
import articles from './articlesReducer.js'



const rootReducer = combineReducers({
  newsArticles: articles,
  BTC: bitcoin,
  ETH: ethereum
})

export default rootReducer;
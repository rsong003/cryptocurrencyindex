import { combineReducers } from 'redux';
import bitcoin from './btcReducer.js'
import ethereum from './ethReducer.js'

const rootReducer = combineReducers({
  BTC: bitcoin,
  ETH: ethereum
})

export default rootReducer;
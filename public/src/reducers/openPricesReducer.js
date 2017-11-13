import {UPDATE_OPEN_PRICES, GET_MARKET_SHARES} from '../actions/Ticker.js'


const INITIAL_STATE = {openPrices: {}, marketShares: {}}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case UPDATE_OPEN_PRICES:
      return Object.assign({}, state, {openPrices: action.payload});
    case GET_MARKET_SHARES:
      return Object.assign({}, state, {marketShares: action.payload});
    default :
      return state;
  }
}

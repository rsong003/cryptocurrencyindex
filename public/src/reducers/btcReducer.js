import {UPDATE_BITCOIN_PRICE} from '../actions/Bitcoin.js'
import {GET_HISTORICAL_BITCOIN} from '../actions/Bitcoin.js'

const INITIAL_STATE = {bitcoin: {}, bitcoinHistorical: []}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case UPDATE_BITCOIN_PRICE:
      return Object.assign({}, state, {bitcoin: action.payload});
    case GET_HISTORICAL_BITCOIN:
      return Object.assign({}, state, {bitcoinHistorical: [...state.bitcoinHistorical.concat(action.payload)]});
    default :
      return state;
  }
}

import {UPDATE_ETH_PRICE} from '../actions/Ethereum.js'
import {GET_HISTORICAL_ETH} from '../actions/Ethereum.js'

const INITIAL_STATE = {ethereum: {}, ethereumHistorical: []}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case UPDATE_ETH_PRICE:
      return Object.assign({}, state, {ethereum: action.payload});
    case GET_HISTORICAL_ETH:
      return Object.assign({}, state, {ethereumHistorical: [...state.ethereumHistorical.concat(action.payload)]});
    default :
      return state;
  }
}

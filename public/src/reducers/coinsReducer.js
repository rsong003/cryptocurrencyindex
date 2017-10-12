import {UPDATE_BITCOIN_PRICE} from '../actions/index.js'

const INITIAL_STATE = {bitcoin: {}}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case UPDATE_BITCOIN_PRICE:
      return Object.assign({}, state, {bitcoin: action.payload})
    default :
      return state;
  }
}

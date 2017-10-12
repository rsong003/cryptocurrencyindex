export const UPDATE_BITCOIN_PRICE = 'UPDATE_BITCOIN_PRICE';

export function updateBitcoinPrice(request) {
  return {
    type: UPDATE_BITCOIN_PRICE,
    payload: request
  };
}


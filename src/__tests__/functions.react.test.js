import coins from '../mocks/coins';
import getCoins from '../mocks/getCoins';
import * as actions from '../redux/coins/coins';

describe('Testing the coins action', () => {
  it('should return the correct action', () => {
    const action = actions.fetchCoinsSuccess(coins);
    const response = {
      type: 'fetch_coins-success',
      payload: coins,
    };
    expect(action).toEqual(response);
  });

  it('should return the correct action undefined', () => {
    const action = actions.fetchCoinsSuccess();
    const response = {
      type: 'fetch_coins-success',
      payload: undefined,
    };
    expect(action).toEqual(response);
  });

  it('should return the correct action', () => {
    const action = actions.fetchCoinsSuccess(coins);
    const response = {
      type: 'fetch_coins-success',
      payload: undefined,
    };
    expect(action).not.toEqual(response);
  });
});

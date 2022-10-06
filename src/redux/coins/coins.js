const FETCH_COINS = 'fetch_coins';
const FETCH_COINS_SUCCESS = 'fetch_coins-success';
const FILTER_COINS = 'filter_coins';
const FETCH_FAILURE = 'fetch_failure';

const initialize = {};

const fechCoins = () => ({
  type: FETCH_COINS,
});

export const fetchCoinsSuccess = (payload) => ({
  type: FETCH_COINS_SUCCESS,
  payload,
});

const fetchFailure = (payload) => ({
  type: FETCH_FAILURE,
  payload,
});

const getCoins = () => async (dispatch) => {
  dispatch(fechCoins());
  try {
    const response = await fetch('https://api.coinstats.app/public/v1/coins');
    const data = await response.json();
    console.log(data.coins);
    dispatch(fetchCoinsSuccess(data.coins));
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};

const filterCoins = (payload) => ({
  type: FILTER_COINS,
  payload,
});

const filterRank = (coins, rank) => {
  switch (rank) {
    case 10:
      return coins.filter((coin) => coin.rank <= 10);
    case 20:
      return coins.filter((coin) => coin.rank <= 20);
    case 50:
      return coins.filter((coin) => coin.rank <= 30);
    case 100:
      return coins.filter((coin) => coin.rank <= 40);
    default:
      return coins;
  }
};

export const filterCoin = (rank) => (dispatch) => {
  const response = getCoins();
  const data = Object.values(response);
  const filteredCoins = filterRank(data, rank);
  console.log(filteredCoins);
  if (filteredCoins) {
    dispatch(filterCoins(filteredCoins));
  }
};

const coinsReducer = (state = initialize, action) => {
  switch (action.type) {
    case FETCH_COINS_SUCCESS:
      return {
        ...state,
        coins: action.payload,
      };
    case FILTER_COINS:
      return { coins: action.payload };
    default:
      return state;
  }
};

export { getCoins, filterCoins };
export default coinsReducer;

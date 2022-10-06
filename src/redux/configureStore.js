import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import coinsReducer, { getCoins } from './coins/coins';

const rootReducer = combineReducers({
  coinsReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
store.dispatch(getCoins());

export default store;

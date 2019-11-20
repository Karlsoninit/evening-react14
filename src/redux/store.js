import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reducer from './reducers';

// import Logger from '../components/middleware/Logger';

const enhuncer = applyMiddleware(logger);

const store = createStore(reducer, composeWithDevTools(enhuncer));

export default store;

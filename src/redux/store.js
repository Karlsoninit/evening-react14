import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import loggerOld from '../middleware/logger';
import logger from 'redux-logger';
import stateValidator from '../middleware/stateValidator';
import ReduxThunk from 'redux-thunk';

const middleware = [ReduxThunk, logger, loggerOld, stateValidator];

const enhuncer = applyMiddleware(...middleware);

const store = createStore(reducer, composeWithDevTools(enhuncer));

export default store;

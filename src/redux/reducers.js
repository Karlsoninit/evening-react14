import { Type } from './actions';
import { combineReducers } from 'redux';
import productsAll from '../products.json';
console.log(productsAll);
const count = (state = '0', { type, payload }) => {
  switch (type) {
    case Type.COUNT_INCREMENT:
      return state + payload;
    case Type.COUNT_DECREMENT:
      return state - payload;
    default:
      return state;
  }
};

const products = (state = [], { type, payload }) => {
  switch (type) {
    case Type.GET_ALL_PRODUCTS:
      return payload;
    case Type.DELETE_ITEMS:
      return state.filter(elem => elem.id !== payload);
    default:
      return state;
  }
};
const news = (state = [], { type, payload }) => {
  switch (type) {
    case Type.GET_ALL_NEWS_SUCCESS:
      return payload;
    case Type.GET_ALL_NEWS_ERROR:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  count,
  products,
  news,
});

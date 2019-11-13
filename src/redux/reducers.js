import { Type } from './actions';

const reducer = (state = { count: 0 }, { type, payload }) => {
  switch (type) {
    case Type.COUNT_INCREMENT:
      return { ...state, count: state.count + payload };
    case Type.COUNT_DECREMENT:
      return { ...state, count: state.count - payload };
    default:
      return state;
  }
};

export default reducer;

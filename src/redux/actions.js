export const Type = {
  COUNT_INCREMENT: 'COUNT_INCREMENT',
  COUNT_DECREMENT: 'COUNT_DECREMENT',
  GET_ALL_PRODUCTS: 'GET_ALL_PRODUCTS',
  DELETE_ITEMS: 'DELETE_ITEMS',
  GET_ALL_NEWS_START: 'GET_ALL_NEWS_START',
  GET_ALL_NEWS_SUCCESS: 'GET_ALL_NEWS_SUCCESS',
  GET_ALL_NEWS_ERROR: 'GET_ALL_NEWS_ERROR',
};

export const increment = value => ({
  type: Type.COUNT_INCREMENT,
  payload: value,
  meta: {
    isShow: false,
  },
});

export const decrement = value => ({
  type: Type.COUNT_DECREMENT,
  payload: value,
});

export const getAllProducts = products => ({
  type: Type.GET_ALL_PRODUCTS,
  payload: products,
});

export const deleteProducts = id => ({
  type: Type.DELETE_ITEMS,
  payload: id,
});

//-------- async

export const getNewsStart = () => ({
  type: Type.GET_ALL_NEWS_START,
});

export const getNewsSuccess = news => ({
  type: Type.GET_ALL_NEWS_SUCCESS,
  payload: news,
});

export const getNewsError = error => ({
  type: Type.GET_ALL_NEWS_ERROR,
  payload: error,
});



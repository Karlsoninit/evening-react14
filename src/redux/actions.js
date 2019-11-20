export const Type = {
  COUNT_INCREMENT: 'COUNT_INCREMENT',
  COUNT_DECREMENT: 'COUNT_DECREMENT',
  GET_ALL_PRODUCTS: 'GET_ALL_PRODUCTS',
  CHOOSE_INGREDIENTS: 'CHOOSE_INGREDIENTS',
  DELETE_ITEMS: 'DELETE_ITEMS',
};

export const increment = value => ({
  type: Type.COUNT_INCREMENT,
  payload: value,
});

export const decrement = value => ({
  type: Type.COUNT_DECREMENT,
  payload: value,
});

export const getAllProducts = products => ({
  type: Type.GET_ALL_PRODUCTS,
  payload: products,
});

export const chooseIngredients = ingredient => ({
  type: Type.CHOOSE_INGREDIENTS,
  payload: ingredient,
});

export const deleteItem = id => ({
  type: Type.DELETE_ITEMS,
  payload: id,
});

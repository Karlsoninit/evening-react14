export const Type = {
  COUNT_INCREMENT: 'COUNT_INCREMENT',
  COUNT_DECREMENT: 'COUNT_DECREMENT',
};

export const increment = value => ({
  type: Type.COUNT_INCREMENT,
  payload: value,
});

export const decrement = value => ({
  type: Type.COUNT_DECREMENT,
  payload: value,
});

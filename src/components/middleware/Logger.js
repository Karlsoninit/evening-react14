const Logger = store => next => action => {
  console.log('store', store.getState());
  console.log('next', next);
  console.log('action', action);
  return next(action);
};

export default Logger;

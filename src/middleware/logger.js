const logger = store => next => action => {
  console.log('store', store.getState());
  console.log('next', next);
  console.log('action', action);

  //   if (action.type === 'COUNT_INCREMENT') {
  //     if (!action.meta.isShow) {
  //       next(action);
  //     }
  //   }

  //   console.log(action.meta.isShow);
  next(action);
};

export default logger;

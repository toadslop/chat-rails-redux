const inputValueReducer = (state = null, action) => {
  switch (action.type) {
    case 'UPDATE_INPUT_VALUE':
      return action.payload;
    case 'CLEAR_INPUT':
      return action.payload;
    default:
      return state;
  }
};

export default inputValueReducer;
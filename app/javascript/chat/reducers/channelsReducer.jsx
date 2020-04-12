const channelsReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_CHANNELS':
      return action.payload;
    default:
      return state;
  }
};

export default channelsReducer;

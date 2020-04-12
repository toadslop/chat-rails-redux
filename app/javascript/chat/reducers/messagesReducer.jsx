/* eslint-disable no-case-declarations */
const messagesReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_MESSAGES':
      return action.payload.messages || [];
    case 'CREATE_MESSAGE':
      let newMessages = state.slice(0);
      newMessages.push(action.payload);
      return newMessages;
    default:
      return state;
  }
};

export default messagesReducer;
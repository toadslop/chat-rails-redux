import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/app';
import messagesReducer from './reducers/messagesReducer';
import channelsReducer from './reducers/channelsReducer';
import inputValueReducer from './reducers/inputValueReducer';

const chatContainer = document.getElementById('chat_app');

const initialState = {
  messages: [],
  channels: [], // TODO: get that from Rails DB.
  inputValue: ''
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  inputValue: inputValueReducer
});

const middlewares = applyMiddleware(logger, ReduxPromise);
const store = createStore(reducers, initialState, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/channels/:channel" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  chatContainer
);

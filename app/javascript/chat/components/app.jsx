import React from 'react';
import ChannelList from '../containers/ChannelList';
import MessageList from '../containers/MessageList';

const App = (props) => {
  return (
    <div className="app">
      <div className="logo-bar">
        <div className="logo">
          <img
            id="logo-img"
            src="http://www.freepngclipart.com/download/sunglasses/52425-eyeglasses-north-family-eye-sunglasses-scituate-care.png"
            alt="logo of guy with classes"
            className="logo"
          />
        </div>
      </div>
      <ChannelList channelFromParams={props.match.params.channel} />
      <MessageList channelFromParams={props.match.params.channel} />
    </div>
  );
};

export default App;
import React from 'react';
import ChannelList from '../containers/ChannelList';
import MessageList from '../containers/MessageList';

const App = (props) => {
  return (
    <div className="app">
      <ChannelList channelFromParams={props.match.params.channel} />
      <MessageList channelFromParams={props.match.params.channel} />
    </div>
  );
};

export default App;
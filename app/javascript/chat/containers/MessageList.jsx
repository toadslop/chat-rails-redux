/* eslint-disable react/prefer-stateless-function */
// external imports
import React, { Component, createRef } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// component imports
import Message from '../components/Message';
import MessageForm from './MessageForm';

// action handlers
import { getMessages } from '../actions';

class MessageList extends Component {
  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const scrollHeight = this.scroll.current.scrollHeight;
    this.scroll.current.scrollTop = scrollHeight;
    this.props.getMessages(this.props.channelFromParams);
    this.intervalId = window.setInterval(() => {
      this.props.getMessages(this.props.channelFromParams);
      console.log("message list, did update", this.props.channelFromParams);
    }, 5000);
  }

  componentDidUpdate() {
    const scrollHeight = this.scroll.current.scrollHeight;
    this.scroll.current.scrollTop = scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  intervalId
  scroll = React.createRef();

  render() {
    const { messages, channelFromParams } = this.props;
    return (
      <div id="message-list">
        <div id="header">
          <h3>Channel {channelFromParams}</h3>
        </div>
        <div ref={this.scroll} id="messages">
          {messages.map((message) => {
            return <Message message={message} key={message.id} />;
          })}
        </div>
        <MessageForm channelFromParams={channelFromParams} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    messages: state.messages
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

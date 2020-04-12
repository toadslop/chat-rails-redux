/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage, updateInputValue, clearInput } from '../actions';

class MessageForm extends Component {
  componentDidMount() {
    this.focus.current.focus();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { channelFromParams, currentUser, inputValue } = this.props;
    this.props.createMessage(channelFromParams, currentUser, inputValue);
    this.props.clearInput();
  }

  handleChange = (event) => {
    this.props.updateInputValue(event.target.value);
  }

  focus = React.createRef();

  render() {
    const { inputValue } = this.props;
    return (
      <form id="message-input" onSubmit={this.handleSubmit}>
        <input ref={this.focus} id="input" type="text" value={inputValue} onChange={this.handleChange} />
        <button id="submit" type="submit">Send</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage, updateInputValue, clearInput },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    inputValue: state.inputValue,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);

/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMessages } from '../actions';

class ChannelList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.channelFromParams !== this.props.channelFromParams) {
      this.props.getMessages(nextProps.channelFromParams);
    }
  }

  classes = "channel-line";

  render() {
    const { currentUser, channels, channelFromParams } = this.props;
    console.log("from channel list", channelFromParams);
    return (
      <div
        className="channel-list"
      >
        <div className="sidebar-section">
          <h2>Bri-chat!</h2>
        </div>
        <div className="sidebar-section">
          <p id="welcome">Hi {currentUser}</p>
        </div>
        <div className="sidebar-section channels">
          <p id="channels-heading">Channels</p>
          <div>
            {channels.map((channel) => {
              return (
                <p
                  id={channel}
                  key={channel}
                  className={(channel === channelFromParams ? `${this.classes} active` : this.classes)}
                >
                  <Link to={`/${channel}`}>
                    #{channel}
                  </Link>
                </p>
              );
            })}
          </div>
        </div>
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
    channels: state.channels,
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);

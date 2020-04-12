/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {emojify} from 'react-emojione';

export default class Message extends Component {
  hashCode = (str) => { // java String#hashCode
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }

  intToRGB = (i) => {
    const c = (i & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();
    return "00000".substring(0, 6 - c.length) + c;
  }

  render() {
    const { message } = this.props;
    return (
      <div className="message">
        <div className="message-heading">
          <p className="user-name" style={{ color: `#${this.intToRGB(this.hashCode(message.author))}` }}>{message.author}</p>
          <p>&nbsp;- {message.created_at}</p>
        </div>
        <p>{emojify(message.content)}</p>
      </div>
    );
  }
}
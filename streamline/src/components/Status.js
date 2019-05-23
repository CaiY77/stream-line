import React, { Component } from 'react';

class Status extends Component {

  render() {
    return (
      <div className="status-box">
        <p className="comment-dates">{this.props.date}</p>
        <div className="icon-action">
          <img className="user-icon" src={this.props.who}/>
          <p className="action"><span className="bold-it">{this.props.name}</span> {this.props.action}</p>
        </div>
      </div>
    );
  }

}

export default Status;

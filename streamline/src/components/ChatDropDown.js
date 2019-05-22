import React, { Component } from 'react'
import chat from '../images/icon-chat@2x.png'

class ChatDropDown extends Component{
  render(){
    return(
      <div className="dropDown">
        <div className="container">
          <button type="button" className="button">
            <img className="chat-img" src={chat} alt="chat-icon" />
          </button>
          <div className=""></div>
        </div>
      </div>
    )
  }
}

export default ChatDropDown

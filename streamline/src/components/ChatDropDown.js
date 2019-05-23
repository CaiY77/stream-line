import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import chat from '../images/icon-chat@2x.png'
import face from '../images/face.png'


class ChatDropDown extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }


  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }

  render() {
    return (
      <div>
        <Link onClick={this.showMenu}>
          <img className="chat-img" src={chat} alt="chat-icon"/>
        </Link>

        {
          this.state.showMenu
            ? (
              <div
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <div className="chatMenu">

                  <div className="top">
                  <div className="chatInside">Channel</div>
                  <div className="line2"></div>
                  <div className="chatInside"><img className="chatInside chatInside2" src={face} alt="little"/></div>
                  </div>
                  <div className="line"></div>

                  <div className="chatContainer">
                  <img src={chat} alt="text" />
                  <Link className="chatTitle">Fortnite Fun Friends</Link>
                  </div>

                  <div className="chatContainer">
                  <img src={chat} alt="text" />
                  <Link className="chatTitle"> Apex Gang</Link>
                  </div>

                  <div className="chatContainer">
                  <img src={chat} alt="text" />
                  <Link className="chatTitle"> Harder Than Dark Souls</Link>
                  </div>

                </div>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default ChatDropDown

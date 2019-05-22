import React, { Component } from 'react';
import {Modal} from 'semantic-ui-react'
import '../App.css'
import Faker from 'faker'


class StreamInfo extends Component {

  render() {
    return (
      <div className="inner-style">
        <div className="modal-top">
          <iframe width="1200" height="600"
            src={this.props.link}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="top-sub">
            <p className="modal-game-name">Best {Faker.lorem.word()} gameplay you've ever seen!!!</p>
            <p className="modal-views">{Faker.random.number()} Views </p>

          </div>
        </div>
        <p className="top-stream">Recent Videos</p>
      </div>
    );
  }

}

export default StreamInfo;

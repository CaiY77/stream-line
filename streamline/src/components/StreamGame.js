import React, { Component } from 'react';
import '../App.css'
import Faker from 'faker'

class StreamGame extends Component {

  render() {
    return (
      <div className="view-border">
        <iframe width="344" height="195"
          src={this.props.links}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className="game-name">New {Faker.lorem.word()} gameplay highlight</p>
        <div className="view-bottom">

          <p className="view">{Faker.random.number()} Views </p>
          <div className="live-logo"><div className="circle"></div> <p className="live-word"> Live </p></div>

        </div>
      </div>
    );
  }

}

export default StreamGame;

import React, { Component } from 'react';
import {Feed,Button} from 'semantic-ui-react'
import '../App.css'
const faker = require('faker');
class Video extends Component {

  render() {

    return (<div className="video-contain">
      <iframe width="775" height="421"
        src={this.props.link}
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <Feed>
        <Feed.Label>Someone:</Feed.Label>
        <Feed.Content>
          <Feed.Summary content={comment} />
        </Feed.Content>
      </Feed>
    </div>);
  }

}

export default Video;

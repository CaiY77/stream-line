import React, { Component } from 'react';
import {Feed,Button,Input,Divider} from 'semantic-ui-react'
import '../App.css'
import Faker from 'faker'

class Video extends Component {

  comments = () => {
    let howMany = [1,1,1,1,1,1,1,1,1,1,1,1,1];

    let commentArr = howMany.map(who=>{
      return (<Feed.Event>
        <Feed.Content>
          <Feed.User>{Faker.name.findName()} : </Feed.User>
          <Feed.Summary>{Faker.lorem.lines()}</Feed.Summary>
        </Feed.Content>
      </Feed.Event>)
    })

    return commentArr;
  }

  render() {
    return (<div className="video-contain">
      <iframe width="775" height="421"
        src={this.props.link}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="chat">
        <h3 className="over">{Faker.lorem.sentence()}</h3>
        <img className='img-icon' src={Faker.image.image()}/>
        <Divider/>
        <Feed className="feed-style">
          {this.comments()}
        </Feed>
        <Input placeholder="Say something mean..." />
      </div>
    </div>);
  }

}

export default Video;

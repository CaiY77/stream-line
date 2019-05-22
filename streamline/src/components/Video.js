import React, { Component } from 'react';
import {Feed,Divider,Modal,Button} from 'semantic-ui-react'
import '../App.css'
import Faker from 'faker'
import CommentForm from './CommentForm';


class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentArr: []
    };
  }
  componentDidMount() {
    this.comments();
  }
  comments = () => {
    let howMany = [1,1,1,1,1,1,1,1,1,1,1,1,1];
    let commentArray = howMany.map(who=>{
      let name = Faker.name.findName()
      let comment = Faker.lorem.lines()
      return (<Feed.Event key={Faker.random.number()} className="event-style" >
        <Feed.Content>
          <Feed.User><p className="color-grey">{name} : </p></Feed.User>
          <Feed.Summary><p className="color-white">{comment}</p></Feed.Summary>
        </Feed.Content>
      </Feed.Event>)
    })

    this.setState({
      commentArr: commentArray
    });
  }

  handleSub=(msg)=>{
    let array = this.state.commentArr
    array.push(
      <Feed.Event key={Faker.random.number()} className="event-style" >
        <Feed.Content>
          <Feed.User><p className="color-grey">Current User : </p></Feed.User>
          <Feed.Summary><p className="color-white">{msg}</p></Feed.Summary>
        </Feed.Content>
      </Feed.Event>
    )
    this.setState({
      commentArr: array
    });
  }

  render() {
    return (<div className="video-contain">
      <iframe width="775" height="421"
        src={this.props.link}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="chat">
        <h3 className="over">{Faker.lorem.sentence()}</h3>
        <img className='img-icon' src={Faker.image.image()}/>
        <Divider/>
        <Feed className="feed-style">
          {this.state.commentArr}
        </Feed>
        <CommentForm handleSub={this.handleSub}/>
      </div>
    </div>);
  }

}

export default Video;

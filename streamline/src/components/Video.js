import React, { Component } from 'react';
import {Feed,Button,Input,Divider,Form} from 'semantic-ui-react'
import '../App.css'
import Faker from 'faker'
let commentArr = []
class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      say: ''
    };
  }

  handleChanges =(event)=>{
    this.setState({
      say: event.target.value
    });
  }

  comments = () => {
    let howMany = [1,1,1,1,1,1,1,1,1,1,1,1,1];

    commentArr = howMany.map(who=>{
      return (<Feed.Event className="event-style" >
        <Feed.Content>
          <Feed.User><p className="color-grey">{Faker.name.findName()} : </p></Feed.User>
          <Feed.Summary><p className="color-white">{Faker.lorem.lines()}</p></Feed.Summary>
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

        <Form className="form" onSubmit={()=>this.handleSub()}>
          <input onChange={this.handleChanges} name="say" placeholder='Say something mean ...' />
          <Button className="button-form" type="submit" content="Send"/>
        </Form>
      </div>
    </div>);
  }

}

export default Video;

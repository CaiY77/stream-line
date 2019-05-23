import React, { Component } from 'react';
import {Form,Button} from 'semantic-ui-react'
import Faker from 'faker'
import heart from '../images/icon_heart.png'
import face from '../images/face.png'
class Comment extends Component {

  render() {
    return (
      <div className="status-box">
        <p className="comment-dates">{this.props.date}</p>
        <div className="icon-action">
          <img className="user-icon" src={this.props.who}/>
          <p className="action"><span className="bold-it">{this.props.name}</span> {this.props.action}</p>
        </div>
        <div className="form-video">
          <div className="comment-form">
            <p className="fake-msg" ><span className="bold-it">Someone: </span>{Faker.lorem.sentence()}</p>
            <p className="fake-msg" ><span className="bold-it">Me: </span>{Faker.lorem.sentence()}</p>
            <p className="fake-likes">{Faker.random.number()} <img src={heart}/> <img src={face}/></p>
            <Form className="form">
              <input placeholder='Reply:' />
              <Button className="button-form" type="submit" content="Send"/>
            </Form>
          </div>

          <div className="comment-video">
            <h1 className="comment-video-head">Best {Faker.lorem.word()} Gameplay You've Ever Seen!!!</h1>
            <img className="fake-video-comment" src={this.props.fake}/>
            <p className="comment-info"><span className="bold-it">Streamer:</span> {Faker.name.firstName()}</p>
            <p className="comment-info"><span className="bold-it">Game:</span> {Faker.lorem.word()}</p>
          </div>

        </div>
      </div>
    );
  }

}

export default Comment;

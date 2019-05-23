import React, { Component } from 'react';
import {Form} from 'semantic-ui-react'
import Comment from "./Comment"
import Status from "./Status"
import Mi from '../images/mi.png'
import Pika from '../images/pika.png'
import Pex from '../images/pex.jpg'
import For from '../images/for.png'
import '../App.css'
import Faker from 'faker'
const options = [
  {
    key: 1,
    text: 'Like',
    value: 'Like'
  },{
    key: 2,
    text: 'Comment',
    value: 'Comment'
  }
]
class Activity extends Component {


  render() {
    return (
      <div className="act-contain">
        <div className="act-left">
          <div className="mini-nav">
            <p className="friends">Friends</p>
            <p className="streamers">Streamers</p>
          </div>
          <div className="select">
            <p className="form-text" >Filter By: </p>
            <Form.Select className="form-size" placeholder= "Likes, Comments..." fluid options={options} />
          </div>
          <Comment fake={For} who={Pika} date="29 May 2019 10:10 PM" name="Ash J.K" action="Commented: "/>
          <Status who={Pika} date="29 May 2019 10:21 PM" name="Ash J.K" action="started following KHeartStick"/>
          <Status who={Mi} date="29 May 2019 10:10 PM" name="Midori.aiya" action="is now LIVE playing Overwatch"/>
          <Status who={Mi} date="29 May 2019 9:54 PM" name="Midori.aiya" action="started following KHeartStick"/>
          <Comment fake={Pex} who={Mi} date="29 May 2019 9:43 PM" name="Midori.aiya" action="Commented: "/>
        </div>
        <div className="act-right">
          <h3 className="upcoming">Upcoming Events</h3>
          <div className="act-box">
            <div className="fort-cup"></div>
            <p className="event1">FN World Cup Viewing Party</p>
            <p className="event1-time"> 5/23/19 7:00PM - 10:00PM </p>
            <p className="event1-location">10 E 21st  New York</p>
            <p className="event1-descrip">
              Hosting a Fortnite World Cup viewing party at my house. I will provide the snack, so please bring beer if you’re coming!
            </p>
          </div>

          <div className="act-box">
            <div className="scrim"></div>
            <p className="event1">Weekly Overwatch Scrims</p>
            <p className="event1-time"> 5/22/19 7:00PM - 10:00PM </p>
            <p className="event1-location">Global</p>
            <p className="event1-descrip">Week 6 of our scrims will be starting at 7pm and end at 10pm. Please make sure you get your 6 players ready to go...</p>
          </div>

        </div>
      </div>
    );
  }

}

export default Activity;

import React, { Component } from 'react';
import '../App.css'
import Video from './Video'
import StreamGame from './StreamGame'
import {Feed,Button} from 'semantic-ui-react'
import Faker from 'faker'


const links=[
"https://www.youtube.com/embed/OUuhnZ4A9cg?autoplay=1&?start=885",
"https://www.youtube.com/embed/UWNoSGjt_dU?autoplay=1&?start=12",
"https://www.youtube.com/embed/QsawpqAney0?autoplay=1&?start=6"
]
const stream=[
  "https://www.youtube.com/embed/attMWXHVM40?start=2",
  "https://www.youtube.com/embed/sgNFOHItPSk?start=6",
  "https://www.youtube.com/embed/7Wc9EMzxvoE?start=5"
]

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: 0
    };
  }
  handlePrev=()=>{
    let currVid = this.state.video;
    (currVid - 1 < 0)
    ? currVid = links.length-1
    : currVid -= 1
    this.setState({
      video: currVid
    });
  }

  handleNext=()=>{
    let currVid = this.state.video;
    (currVid + 1 == links.length)
    ? currVid = 0
    : currVid += 1
    this.setState({
      video: currVid
    });
  }
  renderStream=()=>{
    let streams = stream.map(vid=>{
      return <StreamGame links={vid}/>
    })
    return streams;
  }

  render() {
    return (
      <div>
        <div className="live">
          <Button onClick={()=>this.handlePrev()} color="black" icon='left chevron'/>
          <Video link={links[this.state.video]}/>
          <Button onClick={()=>this.handleNext()} color="black" icon='right chevron'/>
        </div>
        <p className="top-stream">Top Streamers</p>
        <div className="stream-games">
          {this.renderStream()}
        </div>
        <p className="top-stream">Top Games</p>
        <div className="top-games">
          <div className="view-border">
            <div className ="fort-box"></div>
            <p className="game-name">{Faker.lorem.word()}</p>
            <p className="view">{Faker.random.number()} Views </p>
          </div>
          <div className="view-border">
            <div className ="apex-box"></div>
            <p className="game-name">{Faker.lorem.word()}</p>
            <p className="view">{Faker.random.number()} Views </p>
          </div>
          <div className="view-border">
            <div className ="sekiro-box"></div>
            <p className="game-name">{Faker.lorem.word()}</p>
            <p className="view">{Faker.random.number()} Views </p>
          </div>
        </div>
      </div>
    );
  }

}

export default Landing;

import React, { Component } from 'react';
import '../App.css'
import Video from './Video'
import {Feed,Button} from 'semantic-ui-react'

const links=[
"https://www.youtube.com/embed/OUuhnZ4A9cg?autoplay=0&?start=885",
"https://www.youtube.com/embed/UWNoSGjt_dU?autoplay=0&?start=12",
"https://www.youtube.com/embed/QsawpqAney0?autoplay=0&?start=6"
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

  render() {
    return (
      <div>
        <div className="live">
          <Button onClick={()=>this.handlePrev()} color="black" icon='left chevron'/>
          <Video link={links[this.state.video]}/>
          <Button onClick={()=>this.handleNext()} color="black" icon='right chevron'/>
        </div>
        <div className="top-games">
          <div className ="fort-box"></div>
          <div className ="apex-box"></div>
          <div className ="sekiro-box"></div>
        </div>
      </div>
    );
  }

}

export default Landing;

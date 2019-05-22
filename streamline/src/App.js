import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import Landing from './components/Landing'
import Explore from './components/Explore'
import Following from './components/Following'
import Activity from './components/Activity'
import {Search} from 'semantic-ui-react'
import logo from './images/logo-horizontal.png'
import chat from './images/icon-chat@2x.png'
import explore from './images/icon-explore.png'
import star from './images/star.png'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top10: []
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="landing-background">
        <nav className="nav">
          <Link className="link" to="/activity">Activity</Link>
          <Link className="link" to="/explore">Explore<img src={explore} alt="explore" /></Link>
          <Link className="link" to="/following">Following<img src={star} alt="star"/></Link>

          <div className="logo">
            <Link className="link" to="/">
              <img src={logo} alt="logo"/>
            </Link>
          </div>

          <div className="search">
            <Search placeholder="Search"/>
          </div>
          <img className="chat-img" src={chat} alt="chat-icon" />
        </nav>

        <Route exact path='/' render={()=><Landing/>}/>
        <Route path='/explore' render={()=><Explore/>}/>
        <Route path='/following' render={()=><Following/>}/>
        <Route path='/activity' render={()=><Activity/>}/>

        <footer>
          <div className='footer'>
            <div className="line"></div>
          </div>
          <div>
            <Link className="inner" to="/">About us</Link>
            <Link className="inner" to="/">Terms</Link>
            <Link className="inner" to="/">Privacy Policy</Link>
            <Link className="inner" to="/">Contact Us</Link>
            <Link className="inner" to="/">Help</Link>
          </div>
          <h3>Copyright 2019 - Streamline</h3>
        </footer>



          </div>


          );
          }

          }

          export default App;

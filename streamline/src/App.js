import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import Landing from './components/Landing'
import Explore from './components/Explore'
import Following from './components/Following'
import {Search} from 'semantic-ui-react'
import logo from './images/logo-horizontal.png'
import chat from './images/icon-chat@2x.png'
import explore from './images/icon-explore.png'
import star from './images/star.png'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top10: []
    };
  }

  componentDidMount() {
    // "d42bbd1c49f5b73bd5de7469c579beda"
    
  }

  render() {
    return (
      <div className="landing-background">
        <nav className="nav">
          <Link className="link" to="/activity">Activiy</Link>
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
      </div>
          );
          }

          }

          export default App;

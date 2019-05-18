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
class App extends Component {

  render() {
    return (
      <div className="landing-background">
        <nav className="nav">
          <Link className="link" to="/activity">Activiy</Link>
          <Link className="link" to="/explore">Explore<img src={explore} /></Link>
          <Link className="link" to="/following">Following<img src={star}/></Link>

          <Link className="link" to="/">
            <div className="logo">
              <img src={logo} />
            </div>
        </Link>

          <div className="search">
            <Search placeholder="Search"/>
          </div>
          <img className="chat-img" src={chat} />
        </nav>

        <Route exact path='/' render={()=><Landing/>}/>
        <Route path='/explore' render={()=><Explore/>}/>
        <Route path='/following' render={()=><Following/>}/>
      </div>
          );
          }

          }

          export default App;

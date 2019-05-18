import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import Landing from './components/Landing'
import Explore from './components/Explore'
import Following from './components/Following'
import {Search} from 'semantic-ui-react'
import logo from './images/logo-horizontal.png'
class App extends Component {

  render() {
    return (
      <div className="landing-background">
        <nav className="nav">
          <Link className="link" to="/somewhere">&#9776;</Link>
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/explore">Explore</Link>
          <Link className="link" to="/following">Following</Link>
          <img />
          <Search placeholder="Search"/>
        </nav>

        <Route exact path='/' render={()=><Landing/>}/>
        <Route path='/explore' render={()=><Explore/>}/>
        <Route path='/following' render={()=><Following/>}/>
      </div>
          );
          }

          }

          export default App;

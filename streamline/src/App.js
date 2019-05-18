import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import Landing from './components/Landing'
import Explore from './components/Explore'
import Following from './components/Following'
import {Search} from 'semantic-ui-react'

class App extends Component {

  render() {
    return (
      <div>
        <nav className="nav">
          <Link className="link" to="/somewhere">&#9776;</Link>
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/explore">Explore</Link>
          <Link className="link" to="/following">Following</Link>
          <Search placeholder="Search..."/>
        </nav>

          <Route exact path='/' render={()=><Landing/>}/>
          <Route path='/explore' render={()=><Explore/>}/>
          <Route path='/following' render={()=><Following/>}/>
          </div>
          );
          }

          }

          export default App;

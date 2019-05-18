import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div>
        <nav>
          <Link to="/expore">Explore</Link>
          <Link to="/following">Following</Link>
        </nav>

        <Route exact path='/' render={()=><Landing/>}/>
        <Route path='/explore'/>
        <Route path='/following'/>
      </div>
    );
  }

}

export default App;

import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import Landing from './components/Landing'
import Explore from './components/Explore'
import Following from './components/Following'
import Activity from './components/Activity'
import ChatDropDown from './components/ChatDropDown'
import {Search} from 'semantic-ui-react'
import logo from './images/logo-horizontal.png'
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
          <ChatDropDown />
        </nav>

        <Route exact path='/' render={()=><Landing/>}/>
        <Route path='/explore' render={()=><Explore/>}/>
        <Route path='/following' render={()=><Following/>}/>
        <Route path='/activity' render={()=><Activity/>}/>

        <footer>
          <div className='footer'>
            <div className="line"></div>
          </div>
          <div className="footerDetails">
            <Link className="inner" to="/">About us</Link>
            <Link className="inner" to="/">Terms</Link>
            <Link className="inner" to="/">Privacy Policy</Link>
            <Link className="inner" to="/">Contact Us</Link>
            <Link className="inner" to="/">Help</Link>
          </div>
          <div className="copyRight">
          <h3 className="copy">&copy; 2019 - Streamline</h3>
          </div>
        </footer>
          </div>


          );
          }

          }

          export default App;

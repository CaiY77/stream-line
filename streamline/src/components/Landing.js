import React, { Component } from 'react';
import '../App.css'

class Landing extends Component {

  render() {
    return (
      <div className="landing-background">

        <iframe width="560" height="315"
          src="https://www.youtube.com/embed/OUuhnZ4A9cg?autoplay=0&?start=885"
          frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

      </div>
    );
  }

}

export default Landing;

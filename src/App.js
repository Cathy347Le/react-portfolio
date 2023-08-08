import React, { Component } from 'react';
import Hero from './Components/Hero';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
import MobileNavigation from './Components/MobileNavigation';

class App extends Component {
  render() {
    return (
      <div>
        <MobileNavigation />
        <Hero />
        <About />
        <Work />
        <Contact />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Element } from 'react-scroll';
import './resources/styles.css';

import Header from './components/Header_Footer/Header';
import Featured from './components/featured';
import VenuNfo from './components/venueInfo';
import Highlight from './components/Highlights';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Footer from './components/Header_Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Element name="featured"><Featured /></Element>
        <Element name="venueinfo"><VenuNfo /></Element>
        <Element name="highlights"><Highlight /></Element>
        <Element name="pricing"><Pricing /></Element>
        <Element name="location"><Location /></Element>
        <Footer />
      </div>
    );
  }
}

export default App;

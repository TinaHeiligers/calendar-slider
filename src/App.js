import React, { Component } from 'react';

import CalendarSlider from './CalendarSlider'
import './App.css';
import './CalendarSlider.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Calendar Slider</h2>
          <CalendarSlider />
        </div>
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;

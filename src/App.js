import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SegmentContent from './components/SegmentContent'

class App extends Component {
  render() {
    return(
        // <MuiThemeProvider>
        <div>
          <SegmentContent />
        </div>

        // </MuiThemeProvider>

    )
  }
}

export default App;

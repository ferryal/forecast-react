import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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

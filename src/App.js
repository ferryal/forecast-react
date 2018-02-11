import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Form from './components/Form'


const API_KEY= "95611c5aee12a6c0aa524eb79dffa7bf";
class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <Form />
      </div>
    );
  }
}

export default App;

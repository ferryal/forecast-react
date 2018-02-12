import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Title from './components/Title'
import Weather from './components/Weather'

const API_KEY ="95611c5aee12a6c0aa524eb79dffa7bf"

class App extends Component {
  getWeather = async (e)  => {
    e.preventDefault();
    const api_call = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=Semarang,ID&appid=${API_KEY}&units=metric`)
    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;

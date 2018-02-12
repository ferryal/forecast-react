import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Title from './components/Title'
import Weather from './components/Weather'

const API_KEY ="95611c5aee12a6c0aa524eb79dffa7bf"

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description:undefined,
    error: undefined
  }
  getWeather = async (e)  => {
    e.preventDefault();
    const City = e.target.elements.city.value;
    const Country = e.target.elements.country.value;
    const api_call = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&appid=${API_KEY}&units=metric`)
    const data = await api_call.json();
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    })
  }
  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;

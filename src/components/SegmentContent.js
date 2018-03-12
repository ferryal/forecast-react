import React, { Component } from 'react';
import Form from './Form'
import Forecast from './Forecast'

const API_KEY ="95611c5aee12a6c0aa524eb79dffa7bf"

class App extends Component {
  state = {
    temperature: [],
    city: undefined,
    country: undefined,
    date: [],
    variance:[],
    error: []
  }

  getForecast = async (e)  => {
    e.preventDefault();
    const city = "Jakarta"
    const country = "id"
    const api_call = await fetch (`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`)
    const data = await api_call.json();
    console.log(data);
      this.setState({
        city: data.city.name,
        country: data.city.country,
        date: new Date((data.list[0].dt)*1000).toLocaleDateString(),
        temperature: data.list[0].main.temp,
        variance: (data.list[0].main.temp_max - data.list[0].main.temp_min),
        error: ""
      })
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                  <div className="col-xs-7 form-container">
                    <Form getForecast={this.getForecast}/>
                    <Forecast
                      temperature={this.state.temperature}
                      city={this.state.city}
                      country={this.state.country}
                      date={this.state.date}
                      variance={this.state.variance}
                      error={this.state.error}
                    />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

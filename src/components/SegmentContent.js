import React, { Component } from 'react';
import Form from './Form'
// import Title from './components/Title'
import Weather from './Weather'

const API_KEY ="95611c5aee12a6c0aa524eb79dffa7bf"

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    date: undefined,
    description:undefined,
    error: undefined
  }

  getWeather = async (e)  => {
    e.preventDefault();
    const city = "Tokyo"
    const country = "jpn"
    const api_call = await fetch (`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`)
    const data = await api_call.json();
    console.log(data);
    if ( city && country ) {
      this.setState({
        date: new Date((data.list[0].dt)*1000).toLocaleDateString(),
        city: data.city.name,
        country: data.city.country,
        temperature: (data.list[0].main.temp),
        //using  default data API
        // temperature: (data.list[0].main.temp)-273.15,
        // humidity: data.main.humidity,
        // description: data.weather[0].description,
        error: ""
      })
    }

  }


  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  {/* <Title /> */}
                </div>
                  <div className="col-xs-7 form-container">
                    <Form getWeather={this.getWeather}/>
                    <Weather
                      temperature={this.state.temperature}
                      city={this.state.city}
                      country={this.state.country}
                      date={this.state.date}
                      description={this.state.description}
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

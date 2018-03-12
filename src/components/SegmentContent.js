import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Form from './Form'
import Results from './Results'
import axios from 'axios'


const API_KEY = "481e3bc28e5264e5607c2b65b449bfc1"

class SegmentContent extends Component {
    state = {
      lists: []
    }

  componentWillMount(){
    this.Search()
  }

  Search = (query = '') => {
    axios.get(`api.openweathermap.org/data/2.5/forecast?q=London,us&appid=${API_KEY}`)
    .then(data => {
      this.setState({lists: data.data.results})
      console.log(data);
    })
    .catch(err => {
      console.log('Error', err)
    })
  }

  render(){
    return(

              <div>
                <div>
                  <Form onSearch={this.Search}/>

                </div>
                <Results data={this.state.lists}/>
              </div>

    )
  }
}

export default SegmentContent

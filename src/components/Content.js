import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Form from './Form'
import Results from './Results'
import axios from 'axios'


const API_KEY = "b6907d289e10d714a6e88b30761fae22"

// export default class PersonList extends React.Component {
//   state = {
//     persons: []
//   }
//
//   componentDidMount() {
//     axios.get(`https://jsonplaceholder.typicode.com/users`)
//       .then(res => {
//         const persons = res.data;
//         this.setState({ persons });
//       })
//   }
//
//   render() {
//     return (
//       <ul>
//         { this.state.persons.map(person => <li>{person.name}</li>)}
//       </ul>
//     )
//   }
// }

class SegmentContent extends Component {
    state = {
      data: []
    }

  componentDidMount(){
    const city = "London"
    const country = "us"
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=95611c5aee12a6c0aa524eb79dffa7bf`)
    .then(res => {
      const results = res.data;
      this.setState({results})
      console.log(results);
    })
    .catch(err => {
      console.log('Error', err)
    })
  }

  render(){
    return(
                <ul>
                  { this.state.results.map(result => <li>{result.list[0].dt}</li>)}
                </ul>

    )
  }
}

export default SegmentContent

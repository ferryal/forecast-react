import React, {Component} from 'react';


export default class FormSearch extends Component {
  state ={
    searchText: ''
  }
  onSearchChange = e => {
    this.setState({ searchText: e.target.value})
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.onSearch(this.query.value)
    e.currentTarget.reset()
  }
  render(){
    return(
      <div>
          <form onSubmit={this.handleSubmit} className="form">
            <input
              type="text"
              onChange={this.onSearchChange}
              ref={input => (this.query = input)}
              placeholder="Search What You Need"
            />
            <button>Get CDNJS</button>
          </form>
      </div>
    )
  }
}

import React from 'react'

 const Form = props => (
      <div>
        <form onSubmit={props.getForecast}>
          <button>Get Forecast</button>
        </form>
      </div>
    );

export default Form

import React from 'react'

const Weather = (props) =>
   (
      <div className='weather__info'>
        {
          props.city && props.country &&
        <p className='weather__key'>Location:
          <span className='weather__value'> {props.city}, {props.country}  </span>
        </p>
        }
        {
          props.temperature &&
          <p className='weather__key'>Temperature:
            <span className='weather__value'> {props.temperature} </span>
            Celcius
          </p>
        }
        {
          props.date &&
          <p className='weather__key'>Date:
            <span className='weather__value'>
               {props.date}
            </span>
          </p> }
        {
          props.variance &&
          <p className='weather__key'>Temperature variance:
            <span className='weather__value'> {props.variance} </span>
          </p> }
        { props.error && <p className='weather__error'> {props.error} </p> }
      </div>
    );



export default Weather;

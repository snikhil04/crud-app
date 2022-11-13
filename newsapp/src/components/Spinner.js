import React, { Component } from 'react'
import CsLoader from './CsLoader.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='my-3' src={CsLoader} alt="loading" />
      </div>
    )
  }
}

export default Spinner
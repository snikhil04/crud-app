import React from 'react'
import CsLoader from './CsLoader.gif'


export default function Spinner() {
  return (
    <div className='text-center'>
        <img className='my-3' src={CsLoader} alt="loading" />
      </div>
  )
}
import React from 'react';
import '../App.css'

function Display({valuesInput}) {
  return (
    <div>
      <input type="text" value={valuesInput} placeholder='Enter here' />
    </div>
  )
}

export default Display

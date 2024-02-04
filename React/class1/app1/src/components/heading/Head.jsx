import React from 'react'
import './Head.css'
const Head = (props) => {
  return (
    <div className='head'>
        <h1>{props.title}</h1>
    </div>
  )
}

export default Head
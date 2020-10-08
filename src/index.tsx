import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Example1 from './example1'
import Example2 from './example2'

ReactDOM.render(
  <React.StrictMode>
    <Example1 />
    <Example2 />
  </React.StrictMode>,
  document.getElementById('root')
)

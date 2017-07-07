import React from 'react'
import { Link } from 'react-router'
import NavBars from './NavBars.jsx'

const App = props => {
  return (
    <div>
      <NavBars />

      {props.children}
    </div>
  )
}

export default App

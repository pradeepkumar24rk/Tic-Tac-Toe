import React from 'react'
import Tictac from './component/Tictac'
import Nav from './component/Nav'
import './app.css'
const App = () => {
  return (
    <div className='App' >
        <Nav/>
        <Tictac/>
    </div>
  )
}

export default App
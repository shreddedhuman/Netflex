import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import RoutesPages from './routes/RoutesPages'
import './App.css'

function App () {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <RoutesPages />
      </div>
    </BrowserRouter>
  )
}

export default App

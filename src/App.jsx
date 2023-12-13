import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import RoutesPages from './routes/RoutesPages'
import './App.css'

function App () {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <RoutesPages />
      </BrowserRouter>
    </>
  )
}

export default App

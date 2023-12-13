import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import RoutesPages from './routes/RoutesPages'
import SearchBar from './components/SearchBar'
import './App.css'

function App () {
  return (
    <>
      <BrowserRouter>
        <NavBar /> <SearchBar />
        <RoutesPages />
      </BrowserRouter>
    </>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

const RoutesPages = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default RoutesPages

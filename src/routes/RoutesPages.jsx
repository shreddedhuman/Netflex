import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import { searchShows } from '../services/apiService'

const RoutesPages = () => {
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = async (searchTerm) => {
    try {
      const data = await searchShows(searchTerm)
      setSearchResults(data)
    } catch (error) {
      console.error('Error searching shows:', error)
    }
  }

  return (
    <Routes>
      <Route path='/' element={<Home shows={searchResults} onSearch={handleSearch} />} />
      <Route path='/about' element={<About />} />
    </Routes>
  )
}

export default RoutesPages

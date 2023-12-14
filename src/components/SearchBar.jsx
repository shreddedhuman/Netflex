import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const onSearchHandler = async (e) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <Form className='d-flex' onSubmit={onSearchHandler}>
      <Form.Control
        type='search'
        placeholder='Search your favorite TV shows'
        className='me-2'
        aria-label='Search'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant='outline-success' type='submit'>Search</Button>
    </Form>
  )
}

export default SearchBar

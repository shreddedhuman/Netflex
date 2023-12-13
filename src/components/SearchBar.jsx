import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const onSearchHandler = (e) => {
    e.PreventDefault()
  }

  return (
    <Form className='d-flex'>
      <Form.Control
        type='search'
        placeholder='Busca tu serie favorita'
        className='me-2'
        aria-label='Search'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant='outline-success'>Search</Button>
    </Form>
  )
}

export default SearchBar

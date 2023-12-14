import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { fetchShows } from '../services/apiService'

const Home = ({ onSearch }) => {
  const [shows, setShows] = useState([])
  const [selectedShow, setSelectedShow] = useState(null)

  useEffect(() => {
    const fetchInitialShows = async () => {
      try {
        const data = await fetchShows()
        setShows(data)
      } catch (error) {
        console.error('Error fetching initial shows:', error)
      }
    }

    fetchInitialShows()
  }, [])

  const handleShowClick = (show) => {
    setSelectedShow(show)
  }

  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <Row xs={1} md={2} lg={3} className='g-4'>
        {shows.map((show) => (
          <Col key={show.id} className='d-flex align-items-center justify-content-center'>
            <Card style={{ width: '18rem', margin: '10px', cursor: 'pointer' }} onClick={() => handleShowClick(show)}>
              <Card.Img variant='top' src={show.image?.medium} alt={show.name} className='card-img-hover' />
              <Card.Body>
                <Card.Title>{show.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedShow && (
        <div>
          <h2>{selectedShow.name}</h2>
          <p>{selectedShow.summary}</p>
        </div>
      )}
    </div>
  )
}

export default Home

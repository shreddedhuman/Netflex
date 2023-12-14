import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar expand='lg' className='bg-warning'>
      <Container fluid>
        <Navbar.Brand>
          <NavLink to='/'>
            <img src='/src/images/netflex.png' alt='' style={{ width: '70px', height: 'auto' }} />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: '120px' }} navbarScroll>
            <NavLink className='nav-link' to='/'>
              Home
            </NavLink>
            <NavLink className='nav-link' to='/about'>
              About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar

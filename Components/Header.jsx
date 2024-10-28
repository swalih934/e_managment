import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
     <Navbar style={{backgroundColor:'black'}} >
        <Container>
          <Navbar.Brand href="#home">

           {' '}
           <h2  style={{fontWeight:'revert',color:'white'}}>Employee Portal</h2>
          </Navbar.Brand>
          <Link to={'/'}   className='btn btn-outline-light rounded'>Home</Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
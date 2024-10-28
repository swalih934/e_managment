import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
    <div className='container-fluid ' style={{backgroundColor:'gray'}}>
        <Row className='p-5'>
            <Col  sm={12} md={5}>
            <h3 style={{color:'black'}}>Employee Portal</h3>
            <p style={{color:'black'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis impedit illo, distinctio esse adipisci alias vitae iure eos. Natus autem provident harum modi qui quibusdam ea exercitationem, iusto dolorem ullam.</p>
            </Col>
            <Col sm={12} md={2}>
            <h2 style={{color:'black'}}>Links</h2>
            <div  className='d-flex flex-column'>
            <Link  to={'/home'} style={{textDecoration:'none',color:'black'}}>Home</Link>
            <Link style={{textDecoration:'none',color:'black'}}>Link</Link>
            </div>
          

            </Col>
            <Col sm={12} md={5}>
            <h3 style={{color:'black'}}>Feedback</h3>
            <textarea className='form-control mt-3' name="" id=""></textarea>
            <button style={{backgroundColor:'black'}} className='btn btn-dark mt-3'>Submit</button>
            </Col>
        </Row>

    </div>
    
    </>
  )
}

export default Footer
import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Landing() {
  return (
    <>
    <div className=' container-fluid d-flex justify-content-center' >
        <Row className='p-5'>
            <Col sm={12} md={6} className='d-flex justify-content-center flex-column'>
            <h1 style={{color:'black'}} className=''>Employee Portal..</h1>
            <p style={{textAlign:'justify',color:'black'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eveniet iure, voluptates quidem nemo iste earum blanditiis optio architecto accusantium asperiores et consequatur tenetur corporis ex hic? Aliquid, nihil. Eius!</p>
           <Link style={{backgroundColor:'black'}} to={'/home'} className='btn btn-dark d-grid'>Let's Start</Link>
            </Col>
            <Col className='p-3 ps-5' md={6} sm={12}>
            <img width={"400px"} className='img-fluid rounded' src="https://png.pngtree.com/png-clipart/20231005/original/pngtree-hr-department-human-resources-manager-searching-for-new-employees-png-image_13126910.png" alt="" />
            </Col>
        </Row>

</div>

    </>
  )
}

export default Landing
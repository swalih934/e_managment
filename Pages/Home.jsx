import React from 'react'
import Add from '../Components/Add'
import { Row,Col } from 'react-bootstrap'
import EmployeeCard from '../Components/EmployeeCard'
function Home() {
  return (
<>
<div className='container  '>
<Add/>

<Row>
    
    <Col className='border border-2 m-3' style={{backgroundColor:'black'}} sm={12} md={11}>
<EmployeeCard/>
    
    </Col>
</Row>
</div>

</>
)
}

export default Home
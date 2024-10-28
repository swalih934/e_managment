import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState, useEffect,useContext } from 'react';
import Button from 'react-bootstrap/Button';

import { getEmployeApi ,deleteEmployeApi} from '../services/AllApies';
import Edit from './Edit';
import { addprojectResponseContext } from '../context/ContextApi';
import { Row,Col } from 'react-bootstrap';
import { toast } from 'react-toastify';

function EmployeeCard() {
  const [data, setData] = useState([]);

  const [editResponse, setEditResponse] = useState('')

  const { addResponse, setAddResponse } = useContext(addprojectResponseContext)



  useEffect(() => {
    getData()
  }, [addResponse,editResponse])

  const getData = async () => {
    const res = await getEmployeApi()
    console.log(res);
    if (res.status == 200) {
      setData(res.data)
    }
    

  }

  const handleDelete=async(id)=>{
    const res=await deleteEmployeApi(id)
    if(res.status==200){
      toast.success("Employee Deleted Successfully!!")
      getData()

    }
    else{
      toast.warning("Failed to Delete Employee!!")
    }
  }

  return (
    <>
      <div className='mt-3 d-flex align-items-center justify-content-center  container-fluid  '>
        <Row>

        {
          data.length > 0 ?
            <>
              {
                data.map(item => (
                  <Col md={4} className='d-flex justify-content-center'>
                  <Card className='rounded border-3 m-3 ' style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Text>
                        <h6  style={{ color: 'black',fontWeight:'bold' }}>Firstname: <span style={{fontWeight:'lighter'}}>{item.firstname}</span></h6>
                        <h6 style={{ color: 'black',fontWeight:'bold' }}>Lastname: <span style={{fontWeight:'lighter'}}>{item.lastname}</span></h6>
                        <h6 style={{ color: 'black' ,fontWeight:'bold'}}>Age: <span style={{fontWeight:'lighter'}}>{item.age}</span></h6>
                        <h6 style={{ color: 'black' ,fontWeight:'bold'}}>Quailification: <span style={{fontWeight:'lighter'}}>{item.qualification}</span></h6>
                        <h6 style={{ color: 'black',fontWeight:'bold' }}>Email: <span style={{fontWeight:'lighter'}}>{item.email}</span></h6>
                      </Card.Text>
                      <div className='d-flex justify-content-between'>
                        <Edit employee={item}  edit={setEditResponse}/>
                        <Button onClick={()=>handleDelete(item._id)} className='rounded' variant="danger">Delete </Button>
                      </div>

                    </Card.Body>
                  </Card>
                  </Col>
                ))

              }
            </>
            :
            <h3 className='text-center fw-bold'>No employee Added !!</h3>

        }
        </Row>


      </div>




    </>
  )
}

export default EmployeeCard
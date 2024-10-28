import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { editEmployeeApi } from '../services/AllApies';
import { toast } from 'react-toastify';
function Edit({employee,edit}) {
    const [show, setShow] = useState(false);
    const [employeeDetail,setEmployeeDetail]=useState(employee)

    const handleEdit=async(id)=>{
      const editEmployee={
        firstname:employeeDetail.firstname,
        lastname:employeeDetail.lastname,
        age:employeeDetail.age,
        qualification:employeeDetail.qualification,
        email:employeeDetail.email
      }
      const result=await editEmployeeApi(id ,editEmployee)
      if(result.status==200){
        toast.success("Employee details updated successfully!!")
        edit(result)
        handleClose()
      }
      else{
        toast.error("Failed to update")
      }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
<>
<Button onClick={handleShow} className='rounded' variant="success">Edit </Button>

<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Employees</Modal.Title>
        </Modal.Header>
        <Modal.Body>
   <div className='m-2 '>
            <FloatingLabel controlId="floatingPassword" label="First Name">
            <Form.Control value={employeeDetail?.firstname} onChange={(e)=>setEmployeeDetail({...employeeDetail,firstname:e.target.value})}  type="text" placeholder="Password" />
          </FloatingLabel>
          <FloatingLabel className='my-3 ' controlId="floatingPassword" label="LastName">
            <Form.Control value={employeeDetail?.lastname} onChange={(e)=>setEmployeeDetail({...employeeDetail,lastname:e.target.value})} type="text" placeholder="Password" />
          </FloatingLabel>
          <FloatingLabel  className='my-3' controlId="floatingPassword" label="Qualification">
            <Form.Control value={employeeDetail?.qualification} onChange={(e)=>setEmployeeDetail({...employeeDetail,qualification:e.target.value})} type="test" placeholder="Password" />
          </FloatingLabel>
          <FloatingLabel  className='my-3' controlId="floatingPassword" label="Age">
            <Form.Control value={employeeDetail?.age} onChange={(e)=>setEmployeeDetail({...employeeDetail,age:e.target.value})} type="number" placeholder="Password" />
          </FloatingLabel>
          <FloatingLabel  className='my-3 ' controlId="floatingPassword" label="Email">
            <Form.Control value={employeeDetail?.email} onChange={(e)=>setEmployeeDetail({...employeeDetail,email:e.target.value})} type="email" placeholder="Password" />
          </FloatingLabel>
   </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleEdit(employee._id)}>Update</Button>
        </Modal.Footer>
      </Modal>
</>

)
}

export default Edit
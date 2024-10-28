import React from 'react'
import { useState,useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addEmployeApi } from '../services/AllApies';
import { toast } from 'react-toastify';
import { addprojectResponseContext } from '../context/ContextApi';
function Add() {
  const [show, setShow] = useState(false);
  const [project, setProject] = useState({
    firstname: "", lastname: "", qualification: "", age: "", email: ""
  })

  const { addResponse, setAddResponse } = useContext(addprojectResponseContext)


  const handleAddProject = async () => {
    console.log(project);
    const { firstname, lastname, qualification, age, email } = project
    if (!firstname || !lastname || !qualification || !age || !email) {
      toast.warning("enter valid input!!")

    }
    else {
      const fd = new FormData()
      fd.append('firstname', firstname)
      fd.append('lastname', lastname)
      fd.append('qualification', qualification)
      fd.append('age', age)
      fd.append('email', email)


      const res = await addEmployeApi(fd)
      console.log(res);
      if (res.status == 200) {
        toast.success("employee added")
        setProject({
          firstname: "", lastname: "", qualification: "", age: "", email: ""

        })
        handleClose()
        setAddResponse(res)
      }
      else {
        toast.error("employee adding failed")
      }

    }
  }






  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return (
    <>
      <button onClick={handleShow} className='btn btn-dark m-4'>Add Employees <span > <i className="fa-solid fa-plus" beat style={{ color: "#0a0a0a", }} /></span></button>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employees</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='m-2 '>
            <FloatingLabel controlId="floatingPassword" label="First Name">
              <Form.Control onChange={(e) => setProject({ ...project, firstname: e.target.value })} type="text" placeholder="First Name" />
            </FloatingLabel>
            <FloatingLabel className='my-3 ' controlId="floatingPassword" label="LastName">
              <Form.Control onChange={(e) => setProject({ ...project, lastname: e.target.value })} type="text" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel className='my-3' controlId="floatingPassword" label="Qualification">
              <Form.Control onChange={(e) => setProject({ ...project, qualification: e.target.value })} type="test" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel className='my-3' controlId="floatingPassword" label="Age">
              <Form.Control onChange={(e) => setProject({ ...project, age: e.target.value })} type="number" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel className='my-3 ' controlId="floatingPassword" label="Email">
              <Form.Control onChange={(e) => setProject({ ...project, email: e.target.value })} type="email" placeholder="Password" />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAddProject} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
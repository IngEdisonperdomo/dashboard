import React from 'react'
//import urlGet from '../config'
import { withRouter } from 'react-router'
import { Button, Modal, Form } from 'react-bootstrap';
import {Alert} from 'react-bootstrap';


class Modals extends React.Component {

  state = {
    form:{
      email:'', 
      password:'',
    },
    error: true,
    msg:''
  }

  handleChange = e => {
    //console.log(e.target.value)
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = async e => {
    e.preventDefault();

   if(!this.state.form.email){
      this.setState({
        error:null,
        msg: "email es requerido"
      })

    }else if(!this.state.form.password){
      this.setState({
        error:null,
        msg: "password es requerido"
      })
  
    }else{

      this.props.onCloseModal();
      this.props.history.push('/dashboard')
    }
  }
  

  render() {

    let errors;
    if (!this.state.error) {
      errors = <Alert variant='danger' className="mt-3 mb-3">{this.state.msg} Requerido</Alert>;
    }

    return (
      <React.Fragment>
         

      <Modal show={this.props.modalIsOpen} onHide={this.props.onCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Form onSubmit={this.handleSubmit}>
        <Modal.Body>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleChange}/>
            
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange}/>
          </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onCloseModal}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Modal.Footer>
        {errors}
        </Form>
      </Modal>
       
      </React.Fragment>
    )
  }


}
export default withRouter(Modals)
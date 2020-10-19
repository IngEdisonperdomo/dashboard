import React from 'react'
//import urlGet from '../config'
import { withRouter } from 'react-router'
import { Button, Modal, Form } from 'react-bootstrap';


class Modals extends React.Component {

  handleSubmit = async e => {
    e.preventDefault();

    this.props.onCloseModal();
    this.props.history.push('/dashboard')
  }
  

  render() {
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
            <Form.Control type="email" placeholder="Enter email" />
            
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
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
        </Form>
      </Modal>
       
      </React.Fragment>
    )
  }


}
export default withRouter(Modals)
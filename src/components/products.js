import React from 'react'
import { Card, Button } from 'react-bootstrap';
import laptop from '../assets/images/laptop.jpg'

class product extends React.Component{


  render(){
    return (
      <React.Fragment>
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={laptop} style ={{maxHeight: '100px',objectFit : 'contain'}} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            
          </Card.Body>
          <Card.Body className="d-flex justify-content-between pt-0">
            <Button variant="primary" id={this.props.key}>Editar</Button>
            <Button variant="danger" id={this.props.key}>Eliminar</Button>
          </Card.Body>
        </Card>

      </React.Fragment>
    )
  }

}

export default product
import React from 'react'
import {Button,Card} from 'react-bootstrap';

function Cardes() {
  return (
<div class >
  <h1 class='project'>project</h1>
    <div class='cardes'>
    
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="img.jpg" />
      <Card.Body>
        <Card.Title>developping project</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">clik for more information </Button>
      </Card.Body>
    </Card> 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="img.jpg" />
      <Card.Body>
        <Card.Title>developping project</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">clik for more information </Button>
      </Card.Body>
    </Card> 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="img.jpg" />
      <Card.Body>
        <Card.Title>developping project</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">clik for more information </Button>
      </Card.Body>
    </Card> 
    </div>
    </div>
  )
}

export default Cardes

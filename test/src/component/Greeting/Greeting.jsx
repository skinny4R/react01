import React from "react"
import "./Greeting.css"
import{Form, Col, Row, Button} from "react-bootstrap"

const Greeting = () => {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="danger">Danger</Button>
        </Form>
      </div>
    );
}
export default Greeting
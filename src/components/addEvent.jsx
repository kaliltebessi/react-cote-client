
import { Button, Container, Form } from "react-bootstrap";
import { useState } from "react";
import { addEvent } from "../service/api";
import { useNavigate } from 'react-router-dom';


export default function AddEvent() {
    const navigate = useNavigate();
  const [eventItem, setEventItem] = useState({
    name: "",
    description: "",
    price: 0,
    nbTickets: 0,
    img: "",
  });

  const handleInputChange = (e) => {
    setEventItem({ ...eventItem,

         [e.target.name]: e.target.value ,
         [e.target.description]: e.target.value,
         [e.target.price]: e.target.value,
         [e.target.nbTickets]: e.target.value,
         [e.target.img]: e.target.value,

         
        });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addEvent(eventItem);
      navigate('/events');  // navigate to /events
    } catch (error) {
      console.log(error);
    }
  }


  const handleFileChange = (e) => {
    setEventItem({ ...eventItem, img: e.target.files[0] });
  }

  return (
    <Container style={{ marginTop: "30px" }}>
      <h2>Add a new Event to your Event List</h2>
      <Form onChange={handleInputChange} onSubmit={handleSubmit} >
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter a Name"
            value={eventItem.name}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description "
            name="description"
            value={eventItem.description}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={eventItem.price}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Number of Tickets</Form.Label>
          <Form.Control
            type="number"
            name="nbTickets"
            value={eventItem.nbTickets}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            name="img"
            onChange={handleFileChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" >
          Add an Event
        </Button>
        <Button  variant="secondary">
          Cancel
        </Button>
      </Form>
    </Container>
  );
}
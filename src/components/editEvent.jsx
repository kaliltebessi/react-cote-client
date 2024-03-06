import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container, Form } from "react-bootstrap";
import { getallEvents, editEvent } from '../service/api';

const EditEvent = () => {
  const [eventItem, setEventItem] = useState({
    name: "",
    description: "",
    price: 0,
    nbTickets: 0,
    img: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const event = await getallEvents(id);
        setEventItem(event.data);
        console.log(event.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchEvent();
  }, [id]);

  const handleInputChange = (e) => {
    setEventItem({ ...eventItem, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editEvent(id, eventItem);
      navigate('/events');
    } catch (error) {
      console.log(error);
    }
  }

  const handleFileChange = (e) => {
    setEventItem({ ...eventItem, img: e.target.files[0] });
  }

  return (
    <Container style={{ marginTop: "30px" }}>
      <h2>Edit Event</h2>
      <Form onChange={handleInputChange} onSubmit={handleSubmit}>
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
  <Form.Label>Number of Participants</Form.Label>
  <Form.Control
    type="number"
    name="nbParticipants"
    value={eventItem.nbParticipants}
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
  <Button variant="primary" type="submit">Update Event</Button>
  <Button variant="secondary" onClick={() => navigate('/events')}>Cancel</Button>
</Form>
    </Container>
  );
}

export default EditEvent;
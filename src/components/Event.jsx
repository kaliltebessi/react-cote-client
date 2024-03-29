import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';


const Event = (props) => {
  const [event, setEvent] = useState(props.event);
  const navigate = useNavigate();
 

  const buyTicket = () => {

    /*
    if (event.nbTickets == 0) {
      return alert("No more tickets available");
    }
    console.log("buyTicket", event); */
    
    setEvent({
      ...event,
      nbTickets: event.nbTickets - 1,
      nbParticipants: event.nbParticipants + 1,
    });

    props.bookAlert();
  }

  const setlike = () => {
    setEvent({
      ...event,
      like: !event.like,
    });
  }

  const editEvent = (id) => {
    navigate(`/events/edit/${id}`);
  }

  return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={event.nbTickets===0?"images/sold_out.png" :`images/${event.img}`} />
      <Card.Body>
        <Link to={`/events/details/${event.id}`}>
        <Card.Title>{event.name}</Card.Title>
        </Link>
        <Card.Text>
          price : {event.price}
        </Card.Text>
        <Card.Text>
          number of tickets : {event.nbTickets}
        </Card.Text>
        <Card.Text>
          number of participants : {event.nbParticipants}
        </Card.Text>
       
        <Button variant="secondary" onClick={setlike} >{event.like ? 'like' : 'dislike'}</Button>
        <Button variant="primary" onClick={buyTicket} disabled={event.nbTickets === 0 ? true : false}>Book an Event</Button>
        <Button variant="danger" onClick={() => props.deleteEvent(event.id)}>Delete</Button>
        <Button variant="warning" onClick={() => editEvent(event.id)}>Edit</Button>

      </Card.Body>
    </Card>
  );
};

export default Event;
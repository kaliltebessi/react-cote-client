import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ListEvent from '../data/events.json';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const EventDetails = () => {

    const { name } = useParams();
    console.log(name);

    
    const event = ListEvent.find((event) => event.name === name);
    console.log(event.img);

    return (
        <div>
           <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`/images/${event.img}`} />
      <Card.Body>
        <br />
        <Card.Title>{event.name}</Card.Title>
        <br />
        <Card.Text>
          Description : {event.description}
        </Card.Text>
        <br />
        <Card.Text>
          price : {event.price}
        </Card.Text>
        
       
        
      </Card.Body>
    </Card>
        </div>
    );
}

export default EventDetails;

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ListEvent from '../data/events.json';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getallEvents } from '../service/api';
import { useState } from 'react';


const EventDetails = () => {
  const [event, setEvent] = useState({});

    const { id } = useParams();
    console.log(id);

    const fetchevent = async () => {
      const response = await getallEvents(id);
      setEvent(response.data);
      console.log(response.data);
    }


    useEffect(() => {
      
      fetchevent(id);
    }
    , [id]);

    
   

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

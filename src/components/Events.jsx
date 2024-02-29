
import React, { useEffect, useState } from 'react';
import Event from './Event';
import { getallEvents } from '../service/api';
import { deleteEvent } from '../service/api';
const Events = () => {

  const [bookAlert , setBookAlert] = useState(false);

  const [showWelcome, setShowWelcome] = useState(false); 
  const [ListEvent, setListEvent] = useState(null);

 useEffect(() => {
    setShowWelcome(true);
    setTimeout(() => {setShowWelcome(false);}, 3000);
    return () => {
      console.log('componentWillUnmount');
      
    }
  }, []);

  const deleteEvente = async (id) => { 
    try {
      await deleteEvent(id);
      setListEvent(ListEvent.filter((event) => event.id !== id));
    } catch (error) {
      console.log(error);
    }
  }




  const fetchEvents = async () => {
    try {
      const events = await getallEvents();
      setListEvent(events.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    try {
      fetchEvents();
    } catch (error) {
      console.log(error);
    }
  }, []);




  const handleBookAlert = () => {
    setBookAlert(true);

    setTimeout(() => {
      setBookAlert(false);
    }, 3000);
  }




  return (
    
    <div className="row">
      
        {showWelcome && <div className="alert alert-success">Welcome to our events</div>}


            {ListEvent && ListEvent.map((event, index) => {
                return (
                   
                        <Event className="col-md-4" 
                        event={event}  
                        key={index} 
                        bookAlert={handleBookAlert} 
                        deleteEvent={deleteEvente}
                        />
                    
                )
            }
      

            )}
            {bookAlert && <div className="alert alert-success">ticket booked !!</div>}
            
    </div>
  );
}
export default Events;
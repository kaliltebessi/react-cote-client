import ListEvent from '../data/events.json';
import React, { useEffect, useState } from 'react';
import Event from './Event';
const Events = () => {

  const [bookAlert , setBookAlert] = useState(false);

  const [showWelcome, setShowWelcome] = useState(false); 

 useEffect(() => {
    setShowWelcome(true);
    setTimeout(() => {setShowWelcome(false);}, 3000);
    return () => {
      console.log('componentWillUnmount');
      
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
                   
                        <Event className="col-md-4" event={event}  key={index} bookAlert={handleBookAlert}/>
                    
                )
            }
      

            )}
            {bookAlert && <div className="alert alert-success">ticket booked !!</div>}
            
    </div>
  );
}
export default Events;
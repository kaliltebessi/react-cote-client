
import { Route, Routes } from 'react-router-dom'
import './App.css'
import React , { Suspense } from 'react'
import NavigationBar from './components/Navbar';
import AddEvent from './components/addEvent';
import EditEvent from './components/editEvent';
import { useDispatch } from 'react-redux';
import { fetchEvents } from './redux/slices/eventSlice';

const Events = React.lazy(() => import('./components/Events'));
const EventDetails = React.lazy(() => import('./components/EventDetails'));
const NotFound = React.lazy(() => import('./components/NotFound'));


function App() {
 
  const dispatch = useDispatch();

  return (
    <>
    <NavigationBar/>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/events'>
          <Route index element={<Events />} loader={dispatch(fetchEvents)} />
          <Route path="details/:id" element={<EventDetails />} />
          <Route path='add' element={<AddEvent />} />
          <Route path='edit/:id' element={<EditEvent />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>

      
    </>
  )
}

export default App

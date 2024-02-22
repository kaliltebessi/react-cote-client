
import { Route, Routes } from 'react-router-dom'
import './App.css'
import React , { Suspense } from 'react'
import NavigationBar from './components/Navbar';

const Events = React.lazy(() => import('./components/Events'));
const EventDetails = React.lazy(() => import('./components/EventDetails'));
const NotFound = React.lazy(() => import('./components/NotFound'));


function App() {
 


  return (
    <>
    <NavigationBar/>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/events'>
          <Route index element={<Events />} />
          <Route path="details/:name" element={<EventDetails />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>

      
    </>
  )
}

export default App

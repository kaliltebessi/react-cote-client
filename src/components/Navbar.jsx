import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="light" variant="light" className="fixed-top">
        <NavLink to="/events" className="navbar-brand" style={(isActive)=>isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' }}>My Events </NavLink>
        <NavLink to="/events" className="nav-link"> Events</NavLink>
        <NavLink to="/events/add" className="nav-link ms-3"> Add Event</NavLink>
        </Navbar>
  );
}
export default NavigationBar;
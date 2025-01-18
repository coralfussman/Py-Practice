import { NavLink } from 'react-router-dom';
import coral_logo from '../assets/images/coral_logo.svg';
function NavBar() {
  return (
    <nav className="navBar border-b  h-20 justify-center align-middle ">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/help">Help</NavLink>
      <NavLink to="/register">Login</NavLink>

      <img src={coral_logo} width="50px" className="logo" alt="logo" />
    </nav>
  );
}

export default NavBar;

import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

function MainLayouts() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default MainLayouts;

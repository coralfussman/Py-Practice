import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Home from './components/Home';
import MainLayouts from './layouts/MainLayouts';
import About from './components/About';
import Help from './components/Help';
import SignUp from './components/SignUp';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<Home />}></Route>
        <Route path="/help" element={<Help />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

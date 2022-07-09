import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/js/bootstrap.bundle'
import Navbar from './Navbar';
import Login from './Login';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';

function App() {
  // const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/signup"} element={<SignUp />} />
        <Route exact path={"/Login"} element={<Login />} />
      </Routes>

    </>
  );
}

export default App;

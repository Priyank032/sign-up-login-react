import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/js/bootstrap.bundle'
import Login from './Login';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Navbar from './Navbar';
import User_page from './User_Page';
function App() {
  // const location = useLocation();

  return (
    <>
    {/* <Navbar /> */}
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/signup"} element={<SignUp />} />
        <Route exact path={"/Login"} element={<Login />} />
        <Route exact path={"/user"} element={<User_page />} />
      </Routes>

    </>
  );
}

export default App;

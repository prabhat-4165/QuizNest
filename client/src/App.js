import './App.css';
import Home from './Components/LandingPage/Home';
// import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Components/LoginSignup/Login';
import Register from './Components/LoginSignup/Register';
import HomeNew from './Components/LandingPage/HomeNew';
import About from './Components/LandingPage/About';
import Contact from './Components/LandingPage/Contact';
import LoginContextProvider from './Context/LoginContextProvider';

function App() {
  // const [currentForm,serCurrentForm]=useState('login');
  return (
    // <AdminDash />
    <LoginContextProvider>
    <Router>
      <Routes>
        <Route index path='/' element={<HomeNew />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </Router>
    </LoginContextProvider>
  );
}

export default App;

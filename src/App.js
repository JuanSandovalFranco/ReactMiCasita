import './App.css';
import Header from "./components/Header"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Fragment } from 'react/cjs/react.production.min';
import Home from "./components/Home"
import Login from './components/Login';
import Register from './components/Register'
import Admin from './components/Admin'
import User from "./components/User";
import Productos from "./components/Productos";


function App() {


  return (
    <Router>

      <Routes>
          
          <Route path="/" element={<Fragment><Header/><Home/></Fragment>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} /> 
          <Route path="/admin" element={<Admin/>} />
          <Route path="/users" element={<User/>} />
          <Route path="/productos" element={<Productos/>} />

      </Routes>

    </Router>
  );
}

export default App;

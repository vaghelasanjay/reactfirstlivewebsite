import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import Navbar from './Navbar';
import Footer from './Footer.jsx';

function App() {
  return <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/service' element={<Service />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<Navigate replace to="/" />} />
    </Routes>
    <Footer />
  </>
}

export default App;

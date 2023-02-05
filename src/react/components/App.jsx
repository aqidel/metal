import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Ferrous from './pages/Ferrous';
import Non_Ferrous from './pages/Non_Ferrous';
import About from './pages/About';
import Contact from './pages/Contact';
import '../../scss/style.scss';

export default function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ferrous' element={<Ferrous/>}/>
        <Route path='/non-ferrous' element={<Non_Ferrous/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </React.Fragment>
  );
}
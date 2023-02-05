import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../../scss/style.scss';

export default function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
    </React.Fragment>
  );
}
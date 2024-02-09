import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Annonce from './pages/Annonce';
import Favori from './pages/Favori';
import Message from './pages/Message';

const App = () => {
  return (
      <Router>
          <Routes>
            <Route path='/' element={<Annonce />} />
            <Route path='/Annonce' element={<Annonce />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Favori' element={<Favori />} />
            <Route path='/Message' element={<Message />} />
          </Routes>
      </Router>
  );
};

export default App;

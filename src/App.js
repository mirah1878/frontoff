import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './components/Detail';
import Login from './components/Log';
import Annonce from './pages/Annonce';

const App = () => {
  return (
      <Router>
          <Routes>
            <Route path='/' element={<Annonce />} />
            <Route path='/Detail' element={<Detail />} />
            <Route path='/Login' element={<Login />} />
          </Routes>
      </Router>
  );
};

export default App;

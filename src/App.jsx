import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home.jsx'
import Board from './pages/graphs/components/Board.jsx';
import Array from './pages/arrays/components/Array.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/graphs' element={<Board />} />
        <Route path='/arrays' element={<Array />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

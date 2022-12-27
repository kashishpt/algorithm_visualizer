import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home.jsx'
import Board from './pages/graphs/dijkstras/components/Board.jsx';
import Graph from './pages/graphs/Graph.jsx';
import Sorter from './pages/sorting_algs/components/Sorter.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/graphs' element={<Graph />} />
        <Route path='/dijkstras' element={<Board />} />
        <Route path='/sorting' element={<Sorter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

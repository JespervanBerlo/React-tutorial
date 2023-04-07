import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './index.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import TicTacToe from './pages/TicTacToe'
import Paint from './pages/Paint'

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="TicTacToe" element={<TicTacToe />} />
          <Route path="Paint" element={<Paint />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

// ========================================

const root = createRoot(document.getElementById("root"));
root.render(<App />);

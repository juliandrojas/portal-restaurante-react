import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render } from 'react-dom';
import Index from './views/Index';
import Search from './views/Search';

/*const Home = () => (
  <div>
    <h1>Home</h1>
    <Link to="/about">Go to About</Link>
  </div>
);*/

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/searchReserva" element={<Search />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  </BrowserRouter>
);

render(<App />, document.getElementById('root'));

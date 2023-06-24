import React from 'react'
import ReactDOM from 'react-dom/client';
import Index from './views/Index';
//Navigation
//import { Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <Index />
        {/* <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
    </>
)
import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Movies from './Movies';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
import 'jquery';
import 'popper.js/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<Movies />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

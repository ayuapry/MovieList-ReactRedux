import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Details } from './pages/Details';
import { Search } from './components/Search';
import {AllMovies} from './pages/AllMovies';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='*' element={<App />} />
    <Route path='/details/:id' element={<Details />} />
    <Route path='/Search/:name' element={<Search />} />
    <Route path='/movies/' element={<AllMovies />} />
  </Routes>
  </BrowserRouter>
);

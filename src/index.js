import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Details } from './pages/Details';
import { Search } from './components/Search';
import {AllMovies} from './pages/AllMovies';
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="924057308178-7uggqc3rcedbs3gt561kbm8v57jm41ch.apps.googleusercontent.com">
  <BrowserRouter>
  <Routes>
    <Route path='*' element={<App />} />
    <Route path='/details/:id' element={<Details />} />
    <Route path='/Search/:name' element={<Search />} />
    <Route path='/movies/' element={<AllMovies />} />
  </Routes>
  </BrowserRouter>
  </GoogleOAuthProvider>
);

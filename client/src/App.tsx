import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Booking from './pages/Booking';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/booking/:carId' element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

const ProtectedRoute = (props: any) => {
  let user = localStorage.getItem('user')
  if (user)
    return <Route {...props} />
  else 
    return <Navigate to='/login' />
}
export default App;

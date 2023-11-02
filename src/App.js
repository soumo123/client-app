import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Authentication/Login';
import Navbar from './components/Authentication/Navbar';

function App() {
  const userData = useSelector((state) => state.userDetails.user)

  console.log("userDatauserData",userData)

  return (
    <BrowserRouter>
			<Navbar />
      <Routes>
      <Route exact path="/" element={<Home/>} />
      {userData===null &&  <Route exact path="/login" element={<Login />} />}
      </Routes>

      </BrowserRouter>
   
  );
}

export default App;

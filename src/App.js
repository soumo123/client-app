import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Authentication/Login';
import Navbar from './components/Authentication/Navbar';
import Signup from './components/Authentication/Signup';

function App() {
  const userData = useSelector((state) => state.userDetails.user)

  console.log("userDatauserData",userData)

  console.log("env",process.env.REACT_APP_PRODUCTION_URL)

  return (
    <BrowserRouter>
			<Navbar />
      <Routes>
      <Route exact path="/" element={<Home/>} />
      {userData===null &&  <Route exact path="/login" element={<Login />} />}
      <Route exact path="/signup" element={<Signup/>} />
      </Routes>

      </BrowserRouter>
   
  );
}

export default App;

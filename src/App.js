import './App.css';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Headers/Header';
import TodayDeal from './components/Deals/TodayDeal';
import Service from './components/Customer-service/Service';
import SaleProducts from './components/Sales/SaleProducts';
import Release from './components/New-release/Release';
import Home from './components/Home/Home';

function App() {

  return (


    <BrowserRouter>
      <Header/>
      <Routes>
      <Route exact={true} path="/" element={<Home/>}/>
        <Route exact={true} path="/today-deals" element={<TodayDeal/>}/>
        <Route exact={true} path="/services" element={<Service/>}/>
        <Route exact={true} path="/sales" element={<SaleProducts/>}/>
        <Route exact={true} path="/new-releases" element={<Release/>}/>



      </Routes>
    </BrowserRouter>

 
   
  );
}

export default App

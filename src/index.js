import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './landingPage/home/Homepage';
import{BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from './landingPage/signup/Signup';
import About from './landingPage/about/About';
import Pricing from './landingPage/pricing/Pricing';
import Products from './landingPage/products/Products';
import Support from './landingPage/support/Support';
import Notfound from './landingPage/Notfound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/pricing" element={<Pricing/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/support" element={<Support/>}></Route>
          <Route path='*' element ={<Notfound/>}/>
       </Routes>
    </BrowserRouter>
  
);




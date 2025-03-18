import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from "./component/Home/Home";
import Product from './component/Product/Product';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <Router>  
      <Header />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Product/>
      <Contact/>
      <Footer />
    </Router>
  );
}

export default App;

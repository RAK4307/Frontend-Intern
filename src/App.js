import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Pages/Navbar/Navbar'
import Home from './Pages/Home/Home'  
import About from './Pages/Aboutus/About'
import Products from './Pages/Products/Products'
import Works from './Pages/Works/Works'
import Contact from './Pages/contact/contact'
import Footer from './Pages/Footer/Footer'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import TermsOfService from './Pages/Terms/TermsOfService'
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy'
import DoNotSell from './Pages/DoNotSell/DoNotSell'


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />        
        <Route path="/products/:id" element={<ProductDetail />} /> 
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/donotsell" element={<DoNotSell />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
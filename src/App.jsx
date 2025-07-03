import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
// import Footer from './components/Footer'
// import Navbar from './components/Navbar'
// import Collection from './pages/Collection';
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Panier from './pages/panier';
function App() {
  return (
    <div className="">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<h1>Page Not Found</h1>} />
        <Route path="/collection" element={<Collection/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Panier/>} /> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App

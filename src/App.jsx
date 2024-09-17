import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Collection from "./Components/Collection";
// import BestSellers from "./Components/BestSellers";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import MainCollection from "./Components/MainCollection";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Collection />} />
        {/* <Route path="/bestseller" element={<BestSellers />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/collection" element={<MainCollection />} />
      </Routes>
      <Footer /> {/* Render Footer outside of Routes to make it visible on all pages */}
    </Router>
  );
}

export default App;

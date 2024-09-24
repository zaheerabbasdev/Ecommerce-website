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
import ProductDetail from './Components/ProductDetail'; 
import Cart from './Components/AddtoCart';
import { CartProvider } from './Components/CartContext';
import PlaceOrder from './Components/PlaceOrder';
import Login from "./Components/Login";       
import SignUp from "./Components/SignUp";

function App() {
  return (
    <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Collection />} />
         <Route path="/product/:id" element={<ProductDetail />} /> {/* Product Detail Route */}
        {/* <Route path="/bestseller" element={<BestSellers />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Collection" element={<MainCollection />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<SignUp />} />

      </Routes>
      <Footer /> 
    </Router>
    </CartProvider>
  );
}

export default App;

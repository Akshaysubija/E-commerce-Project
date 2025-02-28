// inporting components//

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import React, { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import productsData from "./data/products.json";
import Cart from"./components/Cart";



// state variables//
function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isCartVisible, setCartVisible] = useState(false); 
// add to cart function//
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
// products filtering//
  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to toggle cart visibility//
  const toggleCartVisibility = () => {
    setCartVisible(!isCartVisible);
  };

  return (
    // search inputs//
    <div>
      <Header cartItems={cart.length} toggleCartVisibility={toggleCartVisibility} />
      <div className="container mt-5">
        <div className="row mb-4">
          <div className="col-md-6 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Search for a product..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        {/* product lists */}
        <ProductList products={filteredProducts} addToCart={addToCart} />
      </div>
      {/* cart */}
      <Cart cart={cart} setCart={setCart} isVisible={isCartVisible} toggleCartVisibility={toggleCartVisibility} />
    </div>
  );
}

export default App;
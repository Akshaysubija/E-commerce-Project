// Header file for creating cart icon and details//

import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 

function Header({ cartItems, toggleCartVisibility }) {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-dark text-white">
      <h1>My E-Commerce Store</h1>
      <button className="btn btn-outline-light d-flex align-items-center" onClick={toggleCartVisibility}>
        <FaShoppingCart className="me-2" /> 
        Cart ({cartItems})
      </button>
    </header>
  );
}

export default Header;

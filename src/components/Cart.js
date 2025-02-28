import React from 'react';

// Total price calculation of cart //
function Cart({ cart, setCart, isVisible, toggleCartVisibility }) {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0).toFixed(2);

//  Removing objects from the cart //
  const removeItemFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  if (!isVisible) return null; 

  return (
    // cart styling and structuring//
    <div
      className="position-fixed top-0 end-0 m-4 p-3 bg-light shadow rounded"
      style={{ width: '300px', zIndex: 999 }}
    >
      {/* cart title closing button */}
      <div className="d-flex justify-content-between">
        <h4 className="mb-4">Your Cart</h4>
        <button
          className="btn-close"
          aria-label="Close"
          onClick={toggleCartVisibility} 
        ></button>
      </div>
{/* empty cart or cart item list */}
      {cart.length === 0 ? (
        <p className="text-muted">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="list-group">
            {cart.map((product, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '40px', height: '40px', objectFit: 'cover', marginRight: '10px' }}
                  />
                  <span>{product.name}</span>
                </div>
                <span className="badge bg-primary rounded-pill">${product.price.toFixed(2)}</span>
                <button
                  className="btn btn-danger btn-sm ms-2"
                  onClick={() => removeItemFromCart(product.id)} 
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          {/* Total price checking */}
          <div className="mt-3">
            <h5>Total: ${totalPrice}</h5>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;


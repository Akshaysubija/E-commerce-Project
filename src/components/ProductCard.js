import React from 'react';

function ProductCard({ product, addToCart }) {
  return (
    <div className="card shadow-sm">
      {/* Product image */}
      <img src={product.image} alt={product.name} className="card-img-top" /> 
      {/* card body */}
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text font-weight-bold">${product.price.toFixed(2)}</p>
        {/* add to cart button */}
        <button
          className="btn btn-primary w-100"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products, addToCart }) {
  return (
    <div className="row mt-4">
      {/* product map */}
      {products.map((product) => (
        <div key={product.id} className="col-md-3 mb-4">
          <ProductCard product={product} addToCart={addToCart} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
